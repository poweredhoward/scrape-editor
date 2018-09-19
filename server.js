const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var readline = require('readline');
var cheerio = require("cheerio");
var axios = require("axios");
var fs = require("fs");
var db = require("./models");


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());

//Fetch saved website from db, search by url
app.post("/html/show", (req, res) =>{
  db.Site.find({
    url: req.body.url
  }).then(site =>{
    console.log("Site found!" + site);
    res.send(site);
  })
})

//Save new website to db
app.post("/html/save", (req, res) =>{
  console.log("inside get");
  // axios.get("https://en.wikipedia.org/wiki/2018_Berlin_Marathon")
  axios.get(req.body.url)
  .then(html =>{
    db.Site.create({
      url: req.body.url,
      content: html.data
    }).then(site =>{
      // console.log(site);
      res.json("Success");

    })
  })
})



// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here
// const routes = require("./routes/api.js");
// app.use(routes);
// require("./routes/api");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sitescrape");
mongoose.Promise = Promise;



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
