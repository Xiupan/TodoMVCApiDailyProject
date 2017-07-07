const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/index.html");
})

// put routes here
app.get('/api/todos', function(request, response){
  console.log('api/todos poop');
})

app.get('api/todos/:id', function(request, response){
  var id = request.params.id;
  console.log('api/todos/id poop');
})

app.listen(3000, function () {
    console.log('TodoMVC API App is running!')
});
