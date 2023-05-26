"use strict";
var today =  prompt("What's the day today?");
alert("You said today is " + today);
// document.write("<p>You said today is " + today + "</p>");
var ele = document.getElementById("footer");
ele.innerHTML = "<p>You said today is " + today + "</p>";
