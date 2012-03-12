var config = require('./../config')




// show things list.
exports.list = function(req, res) {
  var list = config.mongo.db('test').collection('things').find().toArray(); 
  res.render('list', list);
};
