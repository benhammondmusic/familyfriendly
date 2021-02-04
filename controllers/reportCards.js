const mongoose = require('mongoose');

// database index which imports places, users, etc
const db = require('../models');

// get all existing report cards
const index = (req, res) => {
  db.Reportcard.find({}, (err, reportcards) => {
    if (err) {
      console.log(err);
    }
    const context = {
      reportcards,
      user: req.user,
    };
    res.render('reportcards/index', context);
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
// POST - from views/reportcards/new
const create = (req, res) => {
  console.log('CREATE REPORT CARD');
  //   console.log(req.body);

  // create a new report card with req.body containing user form input
  db.Reportcard.create(req.body, (err, createdReportCard) => {
    if (err) return console.log(err);

    // set reportcard authorID to current logged in userID
    createdReportCard.authorUserId = req.session.passport.user;

    // get place ID OBJECT from request params ID STRING
    createdReportCard.place = mongoose.Types.ObjectId(req.params.id);

    // save REPORT CARD to DB
    createdReportCard.save();

    db.Place.findById(req.params.id, (err, foundPlace) => {
      // add to PLACE document's array of REPORT CARDS
      foundPlace.reportcards.push(createdReportCard);
      foundPlace.save();

      // send logged in user and PLACE that just received the report card
      const context = {
        place: foundPlace,
        user: req.user,
      };

      // display a place and all its info incl. filed report cards from all users
      // res.render('places/show', context);
      res.redirect(`/places/${req.params.id}`);
    });
  });
};

// DELETE - destroy a REPORT CARD from the db
const destroy = (req, res) => {
  db.Reportcard.findByIdAndDelete(req.params.id, function (err, deletedReportCard) {
    if (err) console.log(err);
    else res.redirect(`/places/${deletedReportCard.place}`);
  });
};

module.exports = {
  index,
  newReportCardForm,
  create,
  destroy,
};
