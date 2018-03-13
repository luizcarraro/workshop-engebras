var express = require('express');
var app = express();
var UserController = require('./UserController');

app.get('/', function (req, res) {
  res.render('index',
    { title: 'Hey', message: 'Hello there!'
  })
});

app.set('view engine', 'ejs');

app.route('/user')
  .get(UserController.get)
  .post(UserController.post)
  .put(UserController.put)
  .delete(UserController.delete);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
