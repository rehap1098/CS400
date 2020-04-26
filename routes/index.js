const weatherconfig = require('../config/weather')
const apiKey = weatherconfig.apiKey

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function (req, res) {
  res.render('index', {weather: weatherPARSE});
});

router.post('/', function (req, res) {
  const city = 'Lakeland'; // req.body.city for input
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'ERROR'});}
    else {
      const weatherJSON = JSON.parse(body);
      const weatherPARSE = `It's ${weatherJSON.main.temp} degrees in ${city}`; //${weatherJSON.name} for name with req.body.city
      res.render('index', {weather: weatherPARSE});
    }
  });
})

module.exports = router;
