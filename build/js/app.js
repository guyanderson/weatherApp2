(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "b75cd2974e806c93645135e29a825fd8";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1}],4:[function(require,module,exports){
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

},{"./../js/humidity.js":2,"./../js/temperature.js":3}]},{},[4]);
