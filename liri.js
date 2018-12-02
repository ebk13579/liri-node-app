require("dotenv").config();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Put in all our requests here
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var fs = require("fs");

// Request for the keys folder
var keys = require("./keys");
// console.log("keys: " + keys.spotify.id);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// var spotify = new Spotify(keys.spotify);

var spotify = new Spotify(keys);

// var spotify = new Spotify({
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
//   });

var spotifyThis = function(songTitle) {

	spotify.search({ type: 'track', query: songTitle }, function (err, data) {
		if (err) {
			return console.log('Error occurred: ' + err);
		}
		var songs = data.tracks.items;
		for (var i = 0; i < songs.length; i++) {
			console.log("\n" + "~".repeat(29));
			console.log(i)
			console.log("Artist(s): " + songs[i].artists.map(getArtistNames));
			console.log("Song Name: " + songs[i].name);
			console.log("Preview Song: " + songs[i].preview_url);
			console.log("Album: " + songs[i].album.name);
			console.log("~".repeat(29) + "\n");
		}
	});

}

var liriThis = function (caseData, funcData) {
	switch (caseData) {
		case "spotify-this-song":
			if (!funcData) {
				funcData = "The Sign"
				spotifyThis(funcData);
				break;
			}
			spotifyThis(funcData);
            break;
            
        case "movie-this":
            if (!funcData){
                funcData = "Mr. Nobody";
				movieThis(functData);
				break;
            }
			movieThis(funcData);
            break;
            
		case "concert-this":
			concertThis(funcData);
            break;
            
		case "do-what-it-says":
			doWhatItSays();
            break;
            
		default:
			console.log("LIRI says whaaat?");
	}
}


var input1 = process.argv[2];
var input2 = process.argv.slice(3).join(" ");

liriThis(input1, input2);
