# liri-node-app
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. 

key.js export appears not to work; to circumvent this, process.env used inside liri.js 

spotify-this-song runs until the following error is encountered: ```Error occurred: TypeError: Cannot read property 'name' of undefined```
spotify-this-song also seems to not return "The Sign", but instead searches for songs with "sign" incorporated in the query's response

Commands: 

node liri.js concert-this [artist OR venue]

node liri.js spotify-this-song [song title]

node liri.js movie-this [movie title]

node liri.js [do-what-it-says]

![](screen-to-gif.gif)
