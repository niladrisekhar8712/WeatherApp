# Weather Application Server-Side
## Overview
The Weather Application is a server-side application built using Node.js and Express.js framework. It fetches weather data for a specified city from external weather APIs and displays it to the user. This documentation provides an overview of the server-side code structure and functionality.

## Setup and Dependencies
Ensure Node.js is installed on your system.
Install the required dependencies by entering following command:
```
npm install
```
## Code Structure
### The server-side code consists of the following components:

Dependencies and Setup: Import necessary modules and set up the Express application instance.

Route Handling: Define routes to handle HTTP requests.

GET '/' Route: Render the index page with initial weather data.

POST '/' Route: Handle form submission to fetch weather data for a specific city.

Server Listening: Start the Express server and listen on a specified port.

## Usage
You can access the website directlu bt clicking this link: https://weatherapp-uo26.onrender.com/

Or start the server by running the following command:
```
node app.js
```
Access the application in a web browser at http://localhost:3000.

Enter a city name in the provided form and submit it to fetch weather data for that city.

##### Note
When you first browse the weather there may be a  few 'NaN' and '--' in the UI but they are just default values and they will be gone when you input a loaction.

## Usage of External APIs
### weatherapi.com:
Utilized to retrieve current weather information such as temperature, humidity, wind speed, etc. and hourly weather forecast data.
### tomorrow.io:
Employed to acquire daily weather forecast data.

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

# Weather Application HTML Template
## Overview
The Weather Application HTML template is used to render weather data fetched from the server-side code onto a web page. This documentation provides an overview of the HTML structure and the dynamic data displayed using EJS (Embedded JavaScript) syntax.

## Structure
The HTML template consists of the following sections:

## Head Section:

Contains metadata and links to external CSS stylesheets and fonts.
Sets the title of the page to display the city name followed by "Weather".
## Body Section:

### Divided into two main sections: left and right.
The left section contains a form to input the city name and display current weather information.
The right section displays hourly and daily weather forecasts, as well as additional weather data.
### Form Input:

Allows users to input a city name and submit it to fetch weather data.
The form submits data to the server-side code using the POST method.
### Weather Display:

Displays current weather information such as temperature, weather condition, feels like temperature, humidity, visibility, wind speed, pressure, and cloud cover.
Includes an icon representing the current weather condition.
### Hourly Forecast:

Displays the hourly weather forecast for the next few hours.
Uses a loop to iterate through the hourly forecast data obtained from the server-side code and display relevant information.
### Daily Forecast:

Displays the daily weather forecast for the next five days. Uses a loop to iterate through the daily forecast data obtained from the server-side code and display relevant information.
### Other Data:

Displays other information such as sunrise time, sunset time, and UV index.
Uses images and text to represent each piece of special weather data.

# Weather Application JavaScript Code
## Overview
The Weather Application JavaScript code dynamically updates the background image of the application based on the current weather condition and UV index. It also adjusts the background image for different screen sizes using media queries.

## Functionality
### Background Image Update:

Retrieves the current weather condition from the DOM.
Constructs the URL for the background image based on the current weather condition.
If the weather condition is "Cloudy" or "Partly cloudy", a specific background image is used.
Sets the background image of the body element using the constructed URL.
### UV Index Update:

Retrieves the UV index from the DOM.
Updates the footer text based on the UV index level:
"LOW" for UV index <= 2.
"MODERATE" for UV index between 3 and 5.
"HIGH" for UV index between 6 and 7.
"VERY HIGH" for UV index greater than 7.
### Media Query Handling:

Defines a function myFunction(x) to handle media queries.
Updates the background image URL based on the screen size.
Registers an event listener for changes in screen size to dynamically update the background image.

# Error Page HTML
## Overview
The Error Page HTML document provides a visually appealing and informative interface for users who encounter a 404 error while navigating a website. It includes a message explaining the error and an option to go back to the previous page.

## Structure
### Error Message:

Displays a prominent heading indicating the error.
Provides a paragraph explaining the error and suggesting a solution (e.g., checking the spelling of the location).
### Error Animation:

Utilizes an animated design with color-changing numbers to create a visually engaging error display.
Consists of three spans representing the digits of the error code "404".
### Navigation Link:

Offers a link labeled "Go Back" that redirects users to the previous page.
Positioned below the error message for easy access.
### Styling
Applies custom styles to enhance the visual appeal of the error page, including font selection, color scheme, and animation effects.
Utilizes Google Fonts for the "Montserrat" and "Catamaran" typefaces.
Implements CSS animations to animate the color of the error numbers.
