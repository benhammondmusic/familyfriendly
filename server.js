const express = require('express');
const app = express();
// so will work both: deployed || locally
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const session = require('express-session');

// REQUIRES ROUTES / INDEX WHICH IN TURN LOADS USER, PLACE, ETC
const routes = require('./routes');

// TO USE EJS FILES
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
  res.render('index/index'); // WELCOME PAGE
});
app.use('/users', routes.users); // ALL USER PAGES
app.use('/places', routes.places); // ALL USER PAGES

app.listen(port, () => {
  console.log(`Family Friendly listening at http://localhost:${port}`);
});
