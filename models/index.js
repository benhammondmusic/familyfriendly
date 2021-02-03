const mongoose = require('mongoose');

// IMPORTS OTHER MODELS AND EXPORTS THEM FOR USE IN CONTROLLERS
module.exports = {
  User: require('./user'),
  Place: require('./place'),
  ReportCard: require('./reportcard'),
};
