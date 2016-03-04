var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/week-6-assessment');
mongoose.model(
    'Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
    },
        {
            collection: 'Heroes'
        }
    )
);

var Hero = mongoose.model('Hero');


router.post('/', function(req, res) {
    console.log('Request Body: ', req.body);

    var addHero = new Hero({
        "alias": req.body.alias,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "city": req.body.city,
        "primary_power": req.body.primary_power
    });

    console.log('Hero added: ', addHero);

    addHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
            res.send(err);
        } else {
            console.log('success');
            res.send(data);
        }
    });
});

module.exports = router;