require("dotenv").config();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Put in all our requests here
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var fs = require("fs");

// Request for the keys folder
var keys = require("./keys");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// Setting up the Spotify search function
var spotify = new Spotify(keys.spotify);
