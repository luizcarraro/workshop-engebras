// UserController.js
module.exports = {
  get: function (req, res) {
    res.send('Hello user from Controller!');
  },
  post: function (req, res) {
    res.send('Got a POST request for /user')
  },
  put: function (req, res) {
    res.send('Got a PUT request for /user')
  },
  delete: function (req, res) {
    res.send('Got a DELETE request for /user')
  }
};
