const Discord = require('discord.js');
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
bot.on("message", function (message)
{
    var input = message.content.toUpperCase();

    if(input === "HELP")
    {
        let adminRoleObject = message.server.roles.get('name', 'admins');
        bot.sendMessage(message, `${adminRoleObject} are on the way!`);
    }
    
    if(input === "PING")
    {
        bot.sendMessage(message, "Pong!");
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
