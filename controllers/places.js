// database index which imports places, users, etc
const db = require('../models');

const show = (req, res) => {
  console.log(req.user);
  const context = { name: 'test place', user: req.user };
  res.render('places/show', { context });
};

const create = (req, res) => {
  console.log('CREATE PLACE');
  const userId = req.session;
  console.log(req.session, 'session');

  // get place name from submitted form on POST /places
  const placeName = req.body.name;

  //  var user = new User({
  //      "loc": {
  //          "type": "Point",
  //          "coordinates": [-73.97, 40.77]
  //      }
  //  });

  console.log(placeName, 'place name');

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
  show,
  create,
};
