var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');

var todo = require('./todo');

var app = express();

app.use(cors());
app.use(bodyParser.json());



app.get('/todo', (req, res) => {
  res.send(todo);
})

app.post('/todo', (req, res) => {
  console.log(req);
  todo.push(req.body);
  res.send(todo);
})

app.delete('/todo', (req, res) => {
  console.log(req);
  res.send(todo);
})

app.put('/todo', (req, res) => {
  todo.push(req.body)
  res.send(todo);
})


const port = 3001;

app.listen(port, () => {
  console.log("listening on port", port)
})