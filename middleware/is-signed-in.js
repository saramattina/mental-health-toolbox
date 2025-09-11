const isSignedIn = (req, res, next) => {
   //if have user, go to next function
   if (req.session.user) return next();
   //if don't have user, go to sign-in
   res.redirect('/');
}

module.exports = isSignedIn;