var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [{
    name: "Madison",
    number: 555-555-5555,
    email: "madison@gmail.com",
    uniqueID: 2
}]