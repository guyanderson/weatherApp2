var Temperature = require('./../js/temperature.js').temperatureModule;

var displayTempInC = function(city, temperatureData) {
  $('.showTemperature').text("The temperature in " + city + " is " + temperatureData + " degrees Celsius");
};

var displayTempInF = function(city, temperatureData) {
  $('.showTemperature').text("The temperature in " + city + " is " + temperatureData + " degrees Fahrenheit");
};

$(document).ready(function() {
  var currentTemperatureObject = new Temperature();
  $('#weather-location').click(function(event) {
    event.preventDefault();
    var city = $('#location').val();
    if ($('#temperature').val() === "celsius") {
      currentTemperatureObject.getTemperatureCelsius(city, displayTempInC);
    }
    if ($('#temperature').val() === "fahrenheit") {
      currentTemperatureObject.getTemperatureFahrenheit(city, displayTempInF);
    }
  });
});
