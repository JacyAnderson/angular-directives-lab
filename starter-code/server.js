'use strict'



// dependencies 
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const db = require('.models');

const questionsList = [
  {question: "What is Batman's guilty pleasure?"},
  {question: "I'm sorry professor, I couldn't complete my homework because _________."},
  {question: "I get by with a little help from _________."},
  {question: "_________. It's a trap!"},
  {question: "The class field trip was completely ruined by _________."},
  {question: "What's my secret power?"}
];

//middleware 
app.use(function(req, res, next) {
	console.log('middleware hit');
	console.log("%s request to %s", req.method, req.path);
	next();
});

// static assests 
app.use(express.static('public'));

//home controller
app.get('/', function(req, res) {
	console.log('home controller hit');
	res.sendFile(_dirname + "views/index.html");
});


// INDEX route
app.get('/api/cards', function(req, res) { 
  let allCards = Cards.find(); 
  res.json(allCards);
});

// SHOW route
app.get('/api/cards/:id', function(request, response) {
  var id = request.params.id; 
  Cards.findById({_id: id}, function(error, card) {
    if(error) response.json({message: 'Could not find the requested card because of ' + error});
    response.json({card: card});
  });
});

// POST route
api.post('/api/cards', function(request, response) {
  var card = new Card(request.body);

  card.save(function(error) {
    if(error) response.json({'Could not create card because ' + error});
    response.json({card: card});
  });
})


//start server
app.listen(port);
console.log('Server started on', port);