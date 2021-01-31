const passport = require('passport');
const express = require('express');
const router = express.Router();

// ! Should move to index ctrl
// Homepage
router.get('/', function (req, res) {
  res.render('index', {
    user: req.user,
  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/places',
    failureRedirect: '/',
  })
);

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// IMPORT FROM EACH ROUTE JS FILE, AND MAKE AVAILABLE FOR SERVER.JS
module.exports = {
  users: require('./users'),
  places: require('./places'),
  index: router,
};
