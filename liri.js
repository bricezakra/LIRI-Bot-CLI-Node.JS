/* Liri can take the following commands:
(1) my-tweets
(2) spotify-this-song
(3) movie-this
(4) do-what-it-says */

var keys = require('./keys.js');
var fs = require('fs');
var args = process.argv[3];
var tweets = require('./src/tweets.js');
var spotify = require('./src/spotify.js');
var omdb = require('./src/omdb.js');
var read = require('./src/read.js')

//Commands
switch(process.argv[2]) {
  case 'my-tweets':
        tweets();
        break;
  case 'spotify-this-song':
        spotify(args);
        break;
  case 'movie-this':
        omdb(args);
        break;
  case 'do-what-it-says':
        read();
        break;
}