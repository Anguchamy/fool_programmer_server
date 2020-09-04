const express = require('express');
const unirest = require("unirest");
const router = express.Router();


router.get('/getWeather', async(request,response) => {
  var req = unirest("GET", "http://api.openweathermap.org/data/2.5/weather?appid=0c42f7f6b53b244c78a418f4f181282a&q="+request.query.cityName);

  req.end(function (res) {
    if (res.error) {
      response.status(400).json({"message":"Internal Server Error"});
    } else {
      response.status(200).json(res.body);
    }
  });
});


module.exports = router;
