require('dotenv').config();
const express = require('express');
const app = express();
// so will work both: deployed || locally
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

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

//after the session middleware /  before  routes that need access to current user
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
app.use('/', routes.index); // contains OAUTH routes
app.use('/users', routes.users); // ALL USER ROUTES
app.use('/places', routes.places); // ALL PLACE ROUTES, ADD REPORT CARD
app.use('/reportcards', routes.reportCards); // VIEW ALL, DELETE, EDIT REPORT CARDS

app.listen(port, () => {
  console.log(`Family Friendly listening at http://localhost:${port}`);
});
