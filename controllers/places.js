// database index which imports places, users, etc
const db = require('../models');

const show = (req, res) => {
  res.render('places/');
};

module.exports = {
  show,
};
