var config = require('./../config');

// show things list.
exports.list = function(req, res) {
  config.mongo.db('test').collection('user').find().toArray(function(err, array) {
    res.render('index/list', {'title': 'List page show userInfo', 'users': array});
  });
};

exports.goAdd = function(req, res) {
  res.render('index/add', {'title': 'add User'});
};

exports.add = function(req, res) {
  var user = req.body.user;
  console.log('user: ' + user);
  config.mongo.db('test').collection('user').save(user);
  config.mongo.db('test').collection('user').find().toArray(function(err, array) {
    res.render('index/list', {'title': 'List page show userInfo', 'users': array});
  });
};
