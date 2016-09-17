console.log ("This is the user-specific start-up script.");

var request = require ('then-request');
var hostBits = "http://localhost:" + context.odb.getAttribute ('system/config/port');

console.log ("these are the host bits: " + hostBits);
request ('GET', hostBits + '/_static/samples/newsConsole.jhtml');