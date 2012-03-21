var config = require('./../config')

// show things list.
exports.list = function(req, res) {
  config.mongo.db('test').collection('things').find().toArray(function(err, array) {
     for(var i = 0; i < array.length; i++) {
       console.log(array[i]);
     }
     res.render('index/list', {'title': 'List page show userInfo', 'things': array});
  });
};
