var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const port = 3000;

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/players', function (req, res) {
  let receivers;
  let backs;
  let quarterbacks;
  fetch('http://api.fantasy.nfl.com/v1/players/editorweekranks?&position=WR&format=json')
  .then(response => response.json())
  .then(data => {
    receivers = data.players
  })
  .catch((err) => { console.log(err) });
});

app.listen(3000, function() {
  console.log(`listening on port ${port}!`);
});

