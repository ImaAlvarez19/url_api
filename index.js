const express = require("express");
const shortUrlRoute = require("./routes/shorturl")
const getShortenUrlRoute = require("./routes/getshortenurl")
const app = express();

app.use(express.json({}));
const PORT = 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));

// GET http://localhost:8000/78PbvC5JB
app.use("/", getShortenUrlRoute);
// POST http://localhost:8000/shorturl
app.use("/shorturl", shortUrlRoute);
