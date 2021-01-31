const express = require('express');
const router = express.Router();

const ctrls = require('../controllers');

// users/
router.get('/register', isLoggedIn, ctrls.users.showRegisterForm);
router.post('/register', isLoggedIn, ctrls.users.register);
router.get('/login', isLoggedIn, ctrls.users.showLoginForm);
router.post('/login', isLoggedIn, ctrls.users.login);

// keep user logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
