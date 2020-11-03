const functions = require('firebase-functions');
const express = require("express");
const shortUrlRoute = require("../routes/shorturl")
const getShortenUrlRoute = require("../routes/getshortenurl")
const app = express();

// GET http://localhost:8000/78PbvC5JB
app.use("/", getShortenUrlRoute);
// POST http://localhost:8000/shorturl
app.use("/shorturl", shortUrlRoute);

exports.api = functions.https.onRequest(app);
