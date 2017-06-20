const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  // TODO write your code here
  let list = []
  list.push ({todo: 'Node Basics'}, {todo: 'Express Basics'}, {todo: 'Mustache'}, {todo: 'HTML forms with express'}, {todo: 'about authentication'}, {todo: 'how to connect to PostgreSQL'}, {todo: 'how to create databases'}, {todo: 'SQL'}, {todo: 'how to connect to PostgreSQL from Node'}, {todo: 'how to use Sequelize'})
  res.render('todo', {list :list})
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
