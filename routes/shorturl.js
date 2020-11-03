const express = require("express");
const shortid = require("shortid");
const validUrl = require("valid-url");
const db = require("../config/db");

var shortUrlRoute = express.Router();

shortUrlRoute.post("/", async (req, res)=>{
  const longUrl = req.body.longUrl;
  const urlCode = shortid.generate();

  if(validUrl.isUri(longUrl)){
    try{
      let url = await db.collection("urls").where('longUrl', '==', longUrl)
        .limit(1)
        .get()
        .then(querySnapshot => {
          if (!querySnapshot.empty) {
            const queryDocumentSnapshot = querySnapshot.docs[0];
            return queryDocumentSnapshot.data();
          } else {
            return null;
          }
        });
      if(url != null) {
        return res.status(200).json(url);
      }else{
        const urlData = {
          longUrl: longUrl,
          urlCode: urlCode
        };
        await db.collection('urls').doc(urlCode).set(urlData)
        return res.status(201).json(urlData);
      }
    }catch(err){
      console.error(err.message);
      return res.status(500).json("Internal Server error " + err.message);
    }
  }else{
    res.status(400).json("Invalid URL. Please enter a valid url for shortening.");
  }
});

module.exports = shortUrlRoute;
