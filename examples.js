"use strict";
var cTemp = 100; // temperature in Celsius
// Let's be generous with parentheses
var hTemp = (cTemp * 9) / 5 + 32;
/// document.write("Temperature in Celsius: " + cTemp + " degrees<br/>");
// document.write("Temperature in Fahrenheit: " + hTemp + " degrees");
let ele = document.getElementById("main");
ele.innerHTML += "Temperature in Celsius: " + cTemp + " degrees<br/>";
ele.innerHTML += "Temperature in Fahrenheit: " + hTemp + " degrees";
