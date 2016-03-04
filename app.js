var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var heroRoute = require('./routes/hero');
var powerRoute = require('./routes/power');
var mongoose = require ('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/week-6-assessment');

app.use('/hero', heroRoute);
app.use('/power', powerRoute);

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/scripts'));
app.use(express.static('public/styles'));
app.use(express.static('public/vendors'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/scripts/factories'));
app.use(express.static('public/views/templates'));

app.set('port', process.env.PORT || 4242);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});