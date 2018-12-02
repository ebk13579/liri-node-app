require("dotenv").config();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Put in all our requests here
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var fs = require("fs");

// Request for the keys folder
const keys = require("./keys.js");
const spotify = new Spotify({
id: process.env.SPOTIFY_ID,
secret: process.env.SPOTIFY_SECRET
});

// console.log("keys: " + keys.spotify.id);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// var spotify = new Spotify(keys.spotify);

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
			console.log("Artist(s): " + songs[i].artists[i].name);
			console.log("Song Name: " + songs[i].name);
			console.log("Preview Song: " + songs[i].preview_url);
			console.log("Album: " + songs[i].album.name);
			console.log("~".repeat(29) + "\n");
		}
	});

}

var movieThis = function (movieTitle) {
	request('http://www.omdbapi.com/?t=' + movieTitle + '&apikey=trilogy', function (error, response, body) {
		if (!error && response.statusCode === 200) {

			var jsonData = JSON.parse(body);
			console.log("\n" + "~".repeat(29));
			console.log("Title: " + jsonData.Title);
			console.log("Year: " + jsonData.Year);
			console.log("Rated: " + jsonData.Rated);
			console.log("IMD Rating: " + jsonData.imdbRating);
			console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
			console.log("Country: " + jsonData.Country);
			console.log("Language: " + jsonData.Language);
			console.log("Plot: " + jsonData.Plot);
			console.log("Actors: " + jsonData.Actors);
			console.log("~".repeat(29) + "\n");
		}
	});
}

var concertThis = function (artistPlace) {
	request('https://rest.bandsintown.com/artists/' + artistPlace + '/events?app_id=trilogy', function (error, response, body) {
		if (error) {
			return console.log('Error occurred: ' + error);
		}

		var jsonData = JSON.parse(body);

		for (var i = 0; i < jsonData.length; i++) {
			console.log("\n" + "~".repeat(29));
			console.log("Venue: " + jsonData[i].venue.name)
			console.log("Location City: " + jsonData[i].venue.city)
			console.log("Location Country: " + jsonData[i].venue.country)
			var dateAndTime = moment(jsonData[i].datetime).format('lll')
			console.log("Date and Time: " + dateAndTime)
			console.log("~".repeat(29) + "\n");
		}

	});
}

var doWhatItSays = function () {
	fs.readFile("random.txt", "utf8", function (err, data) {
		if (err) throw err;

		var dataArray = data.split(',');
		if (dataArray.length == 2) {
			liriThis(dataArray[0], dataArray[1]);
		} else if (dataArray.length == 1) {
			liriThis(dataArray[0]);
		}

	})
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
