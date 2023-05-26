document.write("<p>From external js file</p>");
alert(document.title);
alert(document.lastModified);
document.writeln(document.title);
document.writeln(document.lastModified);
let cTemp = prompt("Enter the temperature in Celsius: ");
let fTemp = (cTemp * 9) / 5 + 32;
document.writeln(
  "The equivalent fahrenheit temperature is" + fTemp + "degrees"
);
fTemp = prompt("Enter the temperature in Fahrenheit: ");
cTemp = ((fTemp - 32) * 5) / 9;
document.writeln("The equivalent Celsius temperature is" + cTemp + " degrees");
