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
      console.log('context in ctrl.places.index before being sent to places/index view', context);
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
  const userId = req.session;

  // get place name from submitted form on POST /places
  const placeName = req.body.name;

  //  var user = new User({
  //      "loc": {
  //          "type": "Point",
  //          "coordinates": [-73.97, 40.77]
  //      }
  //  });

  // create a new place
  db.Place.create(req.body, (err, createdPlace) => {
    if (err) return console.log(err);

    // find authoring user
    db.User.findById(userId, (err, foundUser) => {
      // save place with author ID
      // createdPlace.authorUserId = foundUser._id;
      createdPlace.name = placeName;

      // place geo location
      createdPlace.loc.type = 'Point';
      // ! need get user lat/long
      createdPlace.loc.coordinates = [1000, 1000];
      createdPlace.save();

      // update author places with new place ID
      // ! foundUser.authoredPlaces.push(createdPlace._id);
      // ! foundUser.save();

      // ! need send GET /places to display all places when done
      res.redirect('/');
    });
  });
};

// const newPost = ( req, res ) => {
//   const userId = req.session.currentUser.userId;

//   db.Post.create( req.body, ( err, createdPost ) => {
//     if ( err ) return console.log(err)

//     db.User.findById( userId, ( err, foundUser ) => {

//       createdPost.user = foundUser._id;
//       createdPost.save();

//       foundUser.posts.push(createdPost._id);
//       foundUser.save();

//       res.redirect('/');
//     });
//   });
// }

// const index = (req, res, next) => {
//   Place.find({}, function (err, places) {
//     res.render('places/index', {
//       places,
//       user: req.user,
//     });
//   });
// };

module.exports = {
  index,
  newPlaceForm,
  create,
};
