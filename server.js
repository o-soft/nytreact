var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require(".model/Article.js");

var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nytreact");

//link to heroku

var db = mongoose.connection;

db.on("error", function (err) {

});

db.once("open", function () {
	console.log("Mongoose connection successful.");
});

//Routes
app.get("/", function(req, res) {
	res.sendFile("./public/index.html");
});

// app.get("/api/saved", function(req, res) {

// });


app.listen(PORT, function() {
	console.log("App Listening on PORT: " + PORT);
});



