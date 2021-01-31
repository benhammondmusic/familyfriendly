const passport = require('passport');
require('dotenv').config();

// can't change naming - must referenced exactly CamelCase
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// require('../models');
const User = require('../models/user'); // ! fix to use index model
// console.log(User, 'user model object');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, function (err, user) {
        // error finding user
        if (err) return cb(err);
        // if found, return user object
        if (user) {
          console.log('found existing user: ', user);
          return cb(null, user);
        } else {
          // we have a new user via OAuth!
          console.log('adding new user: ', user);
          const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          });
          newUser.save(function (err) {
            if (err) return cb(err);
            return cb(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
