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
