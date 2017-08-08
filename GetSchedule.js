var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var jp = require('jsonpath');


var printSchedule = function()
{
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.adultswim.com/videos/schedule", false);
	request.send(null);
	
	var res = request.responseText;
	var dataScript = res.substr(res.indexOf("AS_INITIAL_DATA"));
	dataScript = dataScript.substring(18, dataScript.indexOf(";"));

//	console.log(dataScript);

	var schedule = JSON.parse(dataScript);
//	console.log(schedule);

	var rmSchedule = jp.query(schedule, "$.onair_schedule[?(@.showTitle=='Rick and Morty')]");
	console.log(rmSchedule);
};
printSchedule();
