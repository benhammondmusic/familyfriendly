const express = require('express');
const app = express();
// so will work both: deployed || locally
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();

// REQUIRES ROUTES / INDEX WHICH IN TURN LOADS USER, PLACE, ETC
const routes = require('./routes');

// Connect to DB
require('./config/database');
// Connect to Passport
require('./config/passport');

// TO USE EJS FILES
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.json());

// FOR OAUTH
app.use(
  session({
    secret: 'Ben',
    resave: false,
    saveUninitialized: true,
  })
);

//Be sure to mount it after the session middleware and always before any of your routes are mounted that would need access to the current user
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// user authentication middleware
app.use((req, res, next) => {
  app.locals.currentUser = req.session.currentUser;
  next();
});

// ROUTES
app.use('/', routes.index);
app.use('/users', routes.users); // ALL USER PAGES
app.use('/places', routes.places); // ALL USER PAGES

app.listen(port, () => {
  console.log(`Family Friendly listening at http://localhost:${port}`);
});
