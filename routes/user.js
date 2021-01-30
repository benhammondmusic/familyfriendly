const express = require('express');
const router = express.Router();

const ctrls = require('../controllers');

router.get('/register', ctrls.user.showRegisterForm);
router.post('/register', ctrls.user.register);

router.get('/login', ctrls.user.showLoginForm);
router.post('/login', ctrls.user.login);

// IMPORTED BY INDEX ROUTER WHICH IS READ BY SERVER JS
module.exports = router;
