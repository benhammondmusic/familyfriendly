// database index which imports places, users, etc
const db = require('../models');
const { populate } = require('../models/user');

// GET - display MANY / ALL places
const index = (req, res) => {
  // find ALL places
  // fill in user details from ref USER documents
  db.Place.find({})
    .populate('authorUserId')
    .exec((err, places) => {
      if (err) return console.log(err);

      const context = { places, user: req.user };

      // console.log(context.places[0].authorUserId, 'CONTEXT author user id');
      // send to places/index view
      res.render('places/index', context);
    });
};

// GET - display form for USER to add NEW place
const newPlaceForm = (req, res) => {
  const context = { user: req.user };
  res.render('places/new', context);
};

// POST - create one new place
const create = (req, res) => {
  console.log('CREATE PLACE');

  // create a new place
  db.Place.create(req.body, (err, createdPlace) => {
    if (err) return console.log(err);

    // get new place author ID from current logged in user
    createdPlace.authorUserId = req.session.passport.user;
    // get new place name from submitted form on POST /places
    createdPlace.name = req.body.name;

    // place geo location
    createdPlace.loc.type = 'Point';
    // set coordinates from form data collected in places / new
    createdPlace.loc.coordinates = [req.body.latitude, req.body.longitude];

    // save to DB
    createdPlace.save();

    res.redirect('places');
  });
};

// GET - places/:id    (after user submits report card and creates in DB)
// SHOW A SINGLE PLACE AND ITS INFO/REPORT CARDS
const show = (req, res) => {
  console.log('SHOW SINGLE PLACE');
  // retrieve this place
  db.Place.findById(req.params.id)
    // fill in report cards and other ref fields
    .populate('reportCards')
    .exec(function (err, populatedPlace) {
      if (err) console.log(err);
      console.log('The populated place:', populatedPlace);
      // create context to send containing current User and populated place
      const context = {
        user: req.user,
        place: populatedPlace,
      };
      res.render('places/show', context);
    });
};

/* // GET - places/:id    (after user submits report card and creates in DB)
// SHOW A SINGLE PLACE AND ITS INFO/REPORT CARDS
const OLDshow = (req, res) => {
  console.log('SHOW SINGLE PLACE');
  //load single place OBJECT from db (using param PLACE ID STRING), and then send to views/places/show
  db.Place.findById(req.params.id, (err, foundPlace) => {
    const context = {
      user: req.user,
      place: foundPlace,
    };
    console.log(context);
    res.render('places/show', context);
  });
}; */

module.exports = {
  index,
  newPlaceForm,
  create,
  show,
};
