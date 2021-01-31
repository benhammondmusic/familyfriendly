// database index which imports places, users, etc
const db = require('../models');

const show = (req, res) => {
  const context = { name: 'test place', user: req.user };
  res.render('places/show', { context });
};

const index = (req, res, next) => {
  Place.find({}, function (err, places) {
    res.render('places/index', {
      places,
      user: req.user,
    });
  });
};

module.exports = {
  show,
};
