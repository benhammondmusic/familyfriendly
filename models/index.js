const mongoose = require('mongoose');

// IMPORTS OTHER MODELS AND EXPORTS THEM FOR USE IN CONTROLLERS
module.exports = {
  User: require('./User'),
  Place: require('./Place'),
  ReportCard: require('./Reportcard'),
};
