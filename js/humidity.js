var apiKey = require('./../.env').apiKey;

Humidity = function(){
};

Humidity.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
    
  }).fail(function(error) {
    $('.showHumidity').text(error.responseJSON.message);
  });
};

exports.humidityModule = Humidity;
