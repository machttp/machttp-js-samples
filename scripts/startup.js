console.log ("User start-up script running.");

var request = require ('then-request');
var hostBits = "http://localhost:" + context.odb.getAttribute ('system/config/port');

console.log ("Launching the News Console one-pager...");
request ('GET', hostBits + '/one_pagers/newsConsole.jhtml');

console.log ("User start-up script completed.");
