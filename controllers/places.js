// database index which imports places, users, etc
const db = require('../models');
const { populate } = require('../models/User');

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
    .populate('reportcards')
    .exec(function (err, populatedPlace) {
      if (err) console.log(err);
      // console.log('The populated place:', populatedPlace);
      // create context to send containing current User and populated place
      const context = {
        user: req.user,
        place: populatedPlace,
      };
      res.render('places/show', context);
    });
};

// GET places/:id/edit - send to PREPOPULATED FORM for editing
const edit = (req, res) => {
  // find this post in db
  db.Place.findById(req.params.id)
    // callback fn to add with user to context object
    .then((placeToEdit) => {
      const context = { user: req.user, place: placeToEdit };
      // console.log(context, 'context');
      // send along to EDIT FORM page
      res.render('places/edit', context);
    })
    .catch((err) => console.log(err));
};

// PATCH places/:id/ - updated info of PLACE in databse
const update = (req, res) => {
  // find this post in db
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    // callback fn to add with user to context object
    .then((updatedPlace) => {
      // console.log(updatedPlace);
      res.redirect(`/places/${updatedPlace._id}`);
    })
    .catch((err) => console.log(err));
};

// DELETE - destroy a place by ID from the db
const destroy = (req, res) => {
  console.log('DESTROY PLACE');
  db.Place.findByIdAndDelete(req.params.id, function (err, deletedPlace) {
    if (err) console.log(err);
    else {
      res.redirect(`/places`);
    }
  });
};

module.exports = {
  index,
  newPlaceForm,
  create,
  show,
  edit,
  update,
  destroy,
};
