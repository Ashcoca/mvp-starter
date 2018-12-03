var express = require('express');
var bodyParser = require('body-parser');
const fetch = require("node-fetch");

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const port = 3000;


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/receivers', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=WR&count=75&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/backs', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=RB&count=55&format=json')
  .then(response => response.json())
  .then(data => {
    res.send(data)
  })
  .catch(error => {console.log(error)});
});

app.get('/quarterbacks', function (req, res) {
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=QB&count=35&format=json')
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

app.listen(3000, function() {
  console.log(`listening on port ${port}!`);
});

