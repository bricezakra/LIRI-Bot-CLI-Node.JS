var keys = require('../keys.js');
var spotify = require('./spotify.js');
var tweets = require('./tweets.js');
var omdb = require('./omdb.js');
var fs = require('fs');

module.exports = function() {
    var fs = require('fs');
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if (error) {
            return console.log(error);
        }
        var displayData = data.split(',');
        //console.log(displayData);
        if (displayData[0] === 'spotify-this-song') {
            spotify(displayData[1]);
        } else if (displayData[0] === 'movie-this') {
            omdb(displayData[1]);
        } else if (displayData[0] === 'my-tweets') {
            tweets(displayData[1]);
        } else {
            console.log('This command does not exist.')
        }
    })
}