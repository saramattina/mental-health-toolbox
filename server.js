const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const path = require("path");

const db = require("./db/connection");
const port = process.env.PORT || 3000;

// Middleware
const isSignedIn = require("./middleware/is-signed-in.js");
const passUserToView = require("./middleware/pass-user-to-view.js");

// Controllers
const authController = require("./controllers/auth.js");
const toolboxController = require("./controllers/toolbox.js");

// More Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Authentication
app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitalized: true,
   })
);

app.use(passUserToView);

app.get("/", (req, res) => {
   if (req.session.user) {
      res.redirect("/toolbox");
   } else {
      res.render("index.ejs");
   }
})

app.use(passUserToView);
app.use("/auth", authController);
app.use(isSignedIn);

app.us("/toolbox", toolboxController);


db.on("connected", () => {
   console.log("Connected to MongoDB");
   app.listen(port, () => {
      console.log("listening on port", port);
   })
});