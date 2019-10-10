var keys = require('../keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var args = process.argv[3];

//Spotify
module.exports = function(args) {
    var client = new Spotify(keys.spotifyKeys);
    var songName = args;
    client.search( { type: 'track', query: songName }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      var song =  data.tracks.items[0];
      console.log('The song you entered was ' + songName.toUpperCase() + '.')
      console.log('Track Title: ' + song.name)
      console.log('Artist Name: ' + song.artists[0].name)
      console.log('Preview URL: ' + song.preview_url)
      console.log('------------------------------------')
      fs.appendFileSync('log.txt', 'The song you entered was ' + songName.toUpperCase() + '.' + '\n')
      fs.appendFileSync('log.txt', 'Track Title: ' + song.name + '\n')
      fs.appendFileSync('log.txt', 'Artist Name: ' + song.artists[0].name + '\n')
      fs.appendFileSync('log.txt', 'Preview URL: ' + song.preview_url + '\n')
    })
  }