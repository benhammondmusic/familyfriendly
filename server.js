const express = require('express');
const app = express();
// so will work both: deployed || locally
const port = process.env.PORT || 3000;

const methodOverride = require('method-override');
const session = require('express-session');

const routes = require('./routes');

// TO USE EJS FILES
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Family Friendly</h1>'); //! need an index router to handle this
});
app.use('/users', routes.user);

app.listen(port, () => {
  console.log(`Family Friendly listening at http://localhost:${port}`);
});
