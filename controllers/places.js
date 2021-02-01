// database index which imports places, users, etc
const db = require('../models');

// GET - display MANY / ALL places
const index = (req, res) => {
  // find ALL places
  db.Place.find({})
    // fill in user details from ref USER documents
    .populate('user')
    // .sort({ createdAt: -1 })
    .exec((err, places) => {
      if (err) return console.log(err);

      const context = { places, user: req.user };
      // send to places/index view
      res.render('places/index', { context });
    });
};

// GET - display form for USER to add NEW place
const newPlaceForm = (req, res) => {
  const context = { user: req.user };
  res.render('places/new', { context });
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
    // ! need get user lat/long
    createdPlace.loc.coordinates = [1000, 1000];

    // save to DB
    createdPlace.save();

    res.redirect('places');
  });
};

module.exports = {
  index,
  newPlaceForm,
  create,
};
