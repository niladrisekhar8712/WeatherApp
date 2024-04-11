const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
/* Variables */
let cityName = 'Kolkata';
let city = [];
let lat = '--', lon = '--';
let currentIcon = '--';
let sunrise = '--', sunset = '--', temperature = '--', humidity = '--', weather = '--', feelsLike = '--', seaLevelPressure = '--', visibility = '--', windSpeed = '--', windDirection = '--', cloud = '--', timezone = '--', localtime = '--';
let forecastList, dailyForecast, dailyData, uv = '--';
app.get('/', (req, res) => {
  res.render('pages/index', {
    cityName: cityName,
    lat: lat,
    lon: lon,
    riseTime: sunrise,
    setTime: sunset,
    temperature: temperature,
    feelsLike: feelsLike,
    humidity: humidity,
    weather: weather,
    pressure: seaLevelPressure,
    windSpeed: windSpeed,
    windDirection: windDirection,
    cloud: cloud,
    visibility: visibility,
    forecastList: forecastList,
    timezone: timezone,
    localtime: localtime,
    currentIcon: currentIcon,
    dailyForecast: dailyForecast,
    uv: uv
  });
});

app.post('/', (req, res) => {
  cityName = req.body.cityName;
  city.push(cityName);
  let url = 'https://api.weatherapi.com/v1/forecast.json?key=75efa4ecef444031b8b162156241403&q=' + cityName + '&days=2';
  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      weatherData = JSON.parse(data);
      if (weatherData.error) {
        res.render("pages/error", {
          code: weatherData.error.code,
          message: weatherData.error.message
        })
        return;
      }
      lat = weatherData.location.name;
      lon = weatherData.location.country;
      uv = weatherData.current.uv;
      timezone = weatherData.location.tz_id;
      localtime = weatherData.location.localtime;
      if (weatherData.forecast && weatherData.forecast.forecastday && weatherData.forecast.forecastday.length > 0) {
        const firstDayForecast = weatherData.forecast.forecastday[0];
        sunrise = firstDayForecast.astro.sunrise;
        sunset = firstDayForecast.astro.sunset;
        weather = firstDayForecast.day.condition.text;
        forecastList = weatherData.forecast.forecastday;

      } else {
        console.error('Error: Could not retrieve forecast data for the first day.');
        sunrise = null;
        sunset = null;
        forecastList = null;
      }
      temperature = weatherData.current.temp_c;
      humidity = weatherData.current.humidity;
      weather = weatherData.current.condition.text;
      currentIcon = weatherData.current.condition.icon;
      feelsLike = weatherData.current.feelslike_c;
      seaLevelPressure = weatherData.current.pressure_mb;
      cloud = weatherData.current.cloud;
      visibility = weatherData.current.vis_km;
      windSpeed = weatherData.current.wind_kph;
      windDirection = weatherData.current.wind_dir;
      res.redirect('/');
    });
  }).on('error', (e) => {
    console.error(e);
  });
  let url2 = "https://api.tomorrow.io/v4/weather/forecast?location=" + cityName + "&timesteps=1d&units=metric&apikey=Ya1sPHPkqr8hzleonlCg4hMSk1QDUI0r";
  https.get(url2, (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });
    response.on('end', () => {
      dailyData = JSON.parse(data);
      console.log(dailyData);
      if (dailyData.error) {
        res.render("pages/error", {
        })
      }
      dailyForecast = dailyData;
    });
  }).on('error', (e) => {
    console.error(e);
  });
});

app.listen(port, () => {
  console.log(`Weather app listening on port ${port}`);
});
