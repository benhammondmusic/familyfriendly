const mongoose = require('mongoose');

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
// POST - from views/reportcards/new
const create = (req, res) => {
  console.log('CREATE REPORT CARD');
  //   console.log(req.body);

  // create a new report card with req.body containing user form input
  db.ReportCard.create(req.body, (err, createdReportCard) => {
    if (err) return console.log(err);

    // set reportcard authorID to current logged in userID
    createdReportCard.authorUserId = req.session.passport.user;

    // get place ID OBJECT from request params ID STRING
    createdReportCard.place = mongoose.Types.ObjectId(req.params.id);

    // save to DB
    createdReportCard.save();

    // send user and all report cards along to view
    const context = {
      user: req.user,
    };

    res.render('reportcards/', context);
  });
};

// const newPost = ( req, res ) => {
//     const userId = req.session.currentUser.userId;

//     db.Post.create( req.body, ( err, createdPost ) => {
//       if ( err ) return console.log(err)

//       db.User.findById( userId, ( err, foundUser ) => {

//         createdPost.user = foundUser._id;
//         createdPost.save();

//         foundUser.posts.push(createdPost._id);
//         foundUser.save();

//         res.redirect('/');
//       });
//     });
//   }

module.exports = {
  index,
  newReportCardForm,
  create,
};
