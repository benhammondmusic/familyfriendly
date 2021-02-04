const index = (req, res) => {
  res.render('index', {
    user: req.user,
  });
};

module.exports = {
  users: require('./users'),
  places: require('./places'),
  reportcards: require('./reportcards'),
  index,
};
