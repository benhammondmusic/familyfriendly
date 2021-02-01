const index = (req, res) => {
  res.render('index', {
    user: req.user,
  });
};

module.exports = {
  users: require('./users'),
  places: require('./places'),
  reportCards: require('./reportCards'),
  index,
};
