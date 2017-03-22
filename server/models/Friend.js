var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FriendSchema = new Schema({
  first_name: String,
  last_name: String
});

mongoose.model('Friend', FriendSchema);
