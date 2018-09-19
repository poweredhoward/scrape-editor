const router = require("express").Router();
var db = require("../models");
const axios = require("axios");

// router.post("/html", (req, res) =>{
//     console.log("inside get");
//     // axios.get("https://en.wikipedia.org/wiki/2018_Berlin_Marathon")
//     axios.get(req.body.url)
//     .then(html =>{
//         // fs.writeFile("html.html", html.data, function(){

//         // })

//         // console.log(html.data);
//         // var $ = cheerio.load(html);
//         res.send(html.data)
//     })

// })


module.exports = router;