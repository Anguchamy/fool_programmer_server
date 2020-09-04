const express = require('express');
const unirest = require("unirest");
const router = express.Router();

router.get('/getDetail',async(request, response) => {
  var countryname = (request.query.country);
  countryname = countryname.charAt(0).toUpperCase() + countryname.slice(1);
  var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+countryname);

  req.headers({
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "39fa290023mshe6747cdb19f9999p1e4f77jsn3569d021621c",
    "useQueryString": true
  });

  req.end(function (res) {
    if (res.error) {
      response.status(400).json({"message":"Internal Server Error"});
    } else {
      response.status(200).json(res.body);
    }
  });
});

module.exports = router;
