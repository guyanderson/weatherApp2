var apiKey = require('./../.env').apiKey;

Temperature = function(){
};

Temperature.prototype.getTemperatureCelsius = function(city, displayTempInC) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTempInC(city, ((response.main.temp) - 273.15).toFixed(2));
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

Temperature.prototype.getTemperatureFahrenheit = function(city, displayTempInF) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayTempInF(city, ((response.main.temp) * (9/5) - 459.67).toFixed(2));
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
};

exports.temperatureModule = Temperature;
