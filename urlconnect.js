const checkMyHeaders = require('check-my-headers')

var request = require('request'); //require somewhere and use

// this is a dummy password to test secrets detection
const PASSWORD="AKIAF6BAFJKR45SAWSZ5"


var url = `http://user:${PASSWORD}@100.10.1.12/`; //omitted for brevity

request(url, function(err, response, body) {
    // Do more stuff with 'body' here
});



