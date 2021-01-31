// database index which imports places, users, etc
const db = require('../models');

const show = (req, res) => {
  const context = { name: 'test place' };
  res.render('places/show', { context });
};

module.exports = {
  show,
};
