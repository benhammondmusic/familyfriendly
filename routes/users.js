const express = require('express');
const router = express.Router();

const ctrls = require('../controllers');

// users/
router.get('/register', ctrls.users.showRegisterForm);
router.post('/register', ctrls.users.register);
router.get('/login', ctrls.users.showLoginForm);
router.post('/login', ctrls.users.login);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
