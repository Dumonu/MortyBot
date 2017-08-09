var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var jp = require('jsonpath');

const months = [
	'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
	'October', 'November', 'December'
];

var getSchedule = function()
{
	var request = new XMLHttpRequest();
	request.open("GET", "http://www.adultswim.com/videos/schedule", false);
	request.send(null);
	
	var res = request.responseText;
	var dataScript = res.substr(res.indexOf("AS_INITIAL_DATA"));
	dataScript = dataScript.substring(18, dataScript.indexOf(";"));


	var schedule = JSON.parse(dataScript);

	var rmSchedule = jp.query(schedule, "$.onair_schedule[?(@.showTitle=='Rick and Morty')]");
//	console.log(rmSchedule);
	return rmSchedule;
};

var formatSchedule = function()
{
    var schedule = getSchedule();
    var pretty = '';

	for(var i = 0; i < schedule.length; ++i)
	{
		var uglyDate = schedule[i].datetime;
	    var niceDate = months[parseInt(uglyDate.substr(5, 2), 10) - 1];
		niceDate = niceDate + ` ${uglyDate.charAt(8) == '0' ? uglyDate.substr(9, 1) : uglyDate.substr(8, 2)}`;
		console.log(niceDate);
	}

}
formatSchedule();
