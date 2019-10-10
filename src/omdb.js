var request = require('request');
var fs = require('fs');
var args = process.argv[3];

//IMDb
module.exports = function(args) {
    var movieName = args;
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var movieInfo = JSON.parse(body);
        console.log('The movie you entered was ' + movieName.toUpperCase() + '.')
        console.log('Movie Title: ' + movieInfo.Title)
        console.log('Year Released: ' + movieInfo.Year)
        console.log('IMDb Rating: ' + movieInfo.imdbRating)
        console.log('Rotten Tomatoes Rating: ' + movieInfo.Ratings[1].Value)
        console.log('Country: ' + movieInfo.Country)
        console.log('Language: ' + movieInfo.Language)
        console.log('Plot: ' + movieInfo.Plot)
        console.log('Cast: ' + movieInfo.Actors)
        console.log('------------------------------------')
        fs.appendFileSync('log.txt', 'The movie you entered was ' + movieName.toUpperCase() + '.' + '\n')
        fs.appendFileSync('log.txt', 'Movie Title: ' + movieInfo.Title + '\n')
        fs.appendFileSync('log.txt', 'Year Released: ' + movieInfo.Year + '\n')
        fs.appendFileSync('log.txt', 'IMDb Rating: ' + movieInfo.imdbRating)
        fs.appendFileSync('log.txt', 'Rotten Tomatoes Rating: ' + movieInfo.Ratings[1].Value + '\n')
        fs.appendFileSync('log.txt', 'Country: ' + movieInfo.Country + '\n')
        fs.appendFileSync('log.txt', 'Language: ' + movieInfo.Language + '\n')
        fs.appendFileSync('log.txt', 'Plot: ' + movieInfo.Plot + '\n')
        fs.appendFileSync('log.txt', 'Cast: ' + movieInfo.Actors + '\n')
      }
    })
  }