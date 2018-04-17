require('dotenv').config();
// const Spotify = require('node-spotify-api');
// const Twitter = require('twitter');


const keys = require('./keys');
// const spotify = new Spotify(keys.spotify);
// const client = new Twitter(keys.twitter);

const arg1 = process.argv[2];
const arg2 = process.argv[3];

switch(arg1){
  case 'my-tweets':
    console.log("You selected my-tweets");
    break;
  case '':
    if(arg2 !== undefined){
      // what you now know
      console.log(`You requested ${arg2}`);
      // what you knew
      // console.log('You requested ' + arg2);
    }else{
      console.log("Defaulting to The Sign!");
    }
    break;
  default:
    console.log("Uhoh, we dont know what you're talking about")
}

