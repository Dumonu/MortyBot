var Botkit = require('botkit');
var controller = Botkit.slackbot({});

if (!process.env.token){
    console.log('Error: Specify token in environment');
	process.exit(1);
}

var bot = controller.spawn({
   token: process.env.token 
}).startRTM();

controller.on('direct_message', function(bot, message)
{
    bot.reply(message, "Ah, Jeez, Rick!");
});
