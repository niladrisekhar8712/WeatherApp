# Weather Application Server-Side Documentation
## Overview
The Weather Application is a server-side application built using Node.js and Express.js framework. It fetches weather data for a specified city from external weather APIs and displays it to the user. This documentation provides an overview of the server-side code structure and functionality.

## Setup and Dependencies
Ensure Node.js is installed on your system.
Install the required dependencies using npm:
```
npm install express body-parser
```
## Code Structure
### The server-side code consists of the following components:

Dependencies and Setup: Import necessary modules and set up the Express application instance.

Route Handling: Define routes to handle HTTP requests.

GET '/' Route: Render the index page with initial weather data.

POST '/' Route: Handle form submission to fetch weather data for a specific city.

Server Listening: Start the Express server and listen on a specified port.

## Usage
Start the server by running the following command:
```
node app.js
```
Access the application in a web browser at http://localhost:3000.

Enter a city name in the provided form and submit it to fetch weather data for that city.

## Route Details
### GET '/'
Renders the index page with initial weather data.
Parameters passed to the view:
cityName: Name of the city.
lat, lon: Latitude and longitude of the city.
riseTime, setTime: Sunrise and sunset times.
temperature, feelsLike, humidity, weather, pressure, windSpeed, windDirection, cloud, visibility: Current weather information.
forecastList: List of weather forecasts.
timezone, localtime: Timezone and local time of the city.
currentIcon: Icon representing current weather conditions.
dailyForecast: Daily weather forecast data.
uv: UV index.
### POST '/'
Handles form submission to fetch weather data for a specified city.
Updates weather-related variables based on the fetched data.
Redirects to the GET '/' route to render the updated data.
