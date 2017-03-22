var express = require('express');
var path = require('path');
var bp = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8010, function(){
  console.log('Listening to full Friends on port 8010');
})
