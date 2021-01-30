// database
const db = require('../models');

const showRegisterForm = (req, res) => {
  res.render('user/register');
};

const register = (req, res) => {
  console.log('REGISTERING THE USER');
};

const showLoginForm = (req, res) => {
  res.render('user/login');
};

const login = (req, res) => {
  console.log('LOGIN-ING THE USER');
};

module.exports = {
  showRegisterForm,
  register,
  showLoginForm,
  login,
};
