// database index which imports places, users, etc
const db = require('../models');

// get all existing report cards
const index = (req, res) => {
  db.ReportCard.find({}, (err, reportCards) => {
    if (err) {
      console.log(err);
    }
    const context = {
      reportCards,
      user: req.user,
    };
    res.render('reportCards/index', context);
  });
};

// DISPLAY FORM FOR USER TO LEAVE REPORT CARD
const newReportCardForm = (req, res) => {
  db.Place.findById(req.params.id, (err, foundPlace) => {
    const context = {
      user: req.user,
      place: foundPlace,
    };
    res.render('reportcards/new', context);
  });
};

// CREATE REPORT CARD IN DB
const create = (req, res) => {
  console.log('CREATE REPORT CARD IN DB');
};

module.exports = {
  index,
  newReportCardForm,
};
