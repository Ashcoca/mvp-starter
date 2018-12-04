// mongoose.connect('mongodb://localhost/test');
// const db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected to server');
// });

const checkAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
    } else {
    next();
  }
}

module.exports = checkAuth