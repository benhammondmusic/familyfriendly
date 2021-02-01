// database index which imports places, users, etc
const db = require('../models');

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

    // res.redirect('places');
  });
};

// GET - places/:id    (after user submits report card and creates in DB)
// SHOW A SINGLE PLACE AND ITS INFO/REPORT CARDS
const show = (req, res) => {
  console.log('SHOW SINGLE PLACE');
  //! need to load single place object from db, and then send to views/places/show

  const context = { user: req.user };
  console.log(context);
  res.render('places/show', context);

  // db.Place.findById();

  // db.User.findById( userId, ( err, foundUser ) => {

  //   createdPost.user = foundUser._id;
  //   createdPost.save();

  //   foundUser.posts.push(createdPost._id);
  //   foundUser.save();

  //   res.redirect('/');
  // });
};

module.exports = {
  index,
  newPlaceForm,
  create,
  show,
};
