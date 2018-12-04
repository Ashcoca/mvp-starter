const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");



const db = require('../database-mongo');
const port = 3000;
const checkAuth = require('./serverModels.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/receivers', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=WR&count=100&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/backs', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=RB&count=75&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/quarterbacks', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=QB&count=50&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/kickers', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=K&count=35&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/defense', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=DEF&count=32&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

// app.post('/login', function (req, res, next) {
//   var username = req.body.username;
//   var password = req.body.password;
//   checkAuth(username, password);

//   console.log("User name = "+user_name+", password is "+password);
//   res.end("yes");
// });

app.post('/login', function (req, res) {
  console.log(req.body, "hello")
  var post = req.body;
  if (post.user === 'ash' && post.pass === 'ashvin') {
    req.session.user_id = req.body.user;
    res.redirect('/logged_in_test');
  } else {
    res.send('Bad username or password');
  }
});

app.get('/logged_in_test', checkAuth, function (req, res) {
  res.send('if you are viewing this page it means you are logged in');
});

app.post('/save', function (req, res) {

});



app.listen(3000, function() {
  console.log(`listening on port ${port}!`);
});

