const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

    var input = message.content.toUpperCase();

    if(input === "HELP")
    {
        let adminRoleObject = message.server.roles.get('name', 'admins');
        bot.sendMessage(message, `${adminRoleObject} are on the way!`);
    }

client.on('message', message => {
    if (message.content === 'ping') {
    	message.toString("black", "back");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
