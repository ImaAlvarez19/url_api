const express = require("express");
const db = require("../config/db");

var getShortenUrlRoute = express.Router();
getShortenUrlRoute.get('/:urlCode', async (req, res) => {
  var urlCode = req.params.urlCode;

  let urlRef = db.collection('urls').doc(urlCode);
  let url = await urlRef.get()
    .then(doc => {
      return doc.data()
    })

  try {
    if (url != null) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(400).json("The url code doesn't exists in our system.");
    }
  }
  catch (err) {
    console.error("Error while retrieving long url for urlCode " + urlCode);
    return res.status(500).json("There is some internal error.");
  }
});

module.exports = getShortenUrlRoute;
