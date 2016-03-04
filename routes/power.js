var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

// mongoose.createConnection('mongodb://localhost/week-6-assessment');
// I tried createConnection because if I use connect in both files, it gives me an error that says
// 'Trying to open unclosed connection'

mongoose.model(
    'Power',
    new Schema({
            "power_name": String
        },
        {
            collection: 'SuperPowers'
        }
    )
);

var Power = mongoose.model('Power');

router.get('/', function(req, res) {
    var power = req.body.power;
    var heroes = [];
    Power.find({power: power}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });


});



module.exports = router;