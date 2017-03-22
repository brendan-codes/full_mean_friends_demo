var friends = require('../controllers/friends.js');

module.exports = function(app){

  app.get('/friends', function(req, res){
    friends.index(req, res);
  });

  app.post('/friend/new', function(req, res){
    friends.create(req, res);
  })

}
