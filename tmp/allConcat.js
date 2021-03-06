var Humidity = require('./../js/humidity.js').humidityModule;

var displayHumidity = function(city, humidityData) {
  $('.showHumidity').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function() {
  var currentHumidityObject = new Humidity();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    // $('#location').val("");
    currentHumidityObject.getHumidity(city, displayHumidity);
  });
});

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

$(document).ready(function(){
  $('#time').text(moment());
});
