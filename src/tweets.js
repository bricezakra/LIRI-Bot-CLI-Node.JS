var keys = require('../keys.js');
var Twitter = require('twitter');
var fs = require('fs');

//Twitter
module.exports = function() {
    var client = new Twitter(keys.twitterKeys);
    var params = { screen_name: 'bricezakra', count: 20 };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text)
                fs.appendFileSync('log.txt', 'Tweets: ' + tweets[i].text + '\n')
            }
            console.log('')
        }
    })
}