require('dotenv').config();

console.log('this is loaded');

var spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// console.log('this is loaded');

// var penv = require("./ks.env");
// var spotifyKeys = {
//   id: penv.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };

module.exports = spotify;
console.log("spotifyKeys: " + spotify);
// // module.exports.spotifyKeys;