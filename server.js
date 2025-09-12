const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const session = require("express-session");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const morgan = require("morgan");


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
app.use(morgan("dev"));

// Authentication
app.use(
   session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
   })
);

app.use(passUserToView);

app.get("/", (req, res) => {
   if (req.session.user) {
      res.redirect("/toolbox/myTools");
   } else {
      res.render("index.ejs");
   }
})


app.get("/resources", (req, res) => {
   res.render("resources.ejs");
})


app.use("/auth", authController);
app.use(isSignedIn);
app.use("/toolbox", toolboxController);




db.on("connected", () => {
   console.log("Connected to MongoDB");
   app.listen(port, () => {
      console.log("listening on port", port);
   })
});