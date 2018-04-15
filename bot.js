var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function (message)
{
    var input = message.content.toUpperCase();

    if(input === "HELP!")
    {
        let adminRoleObject = message.server.roles.get('name', 'admins');
        bot.sendMessage(message, `${adminRoleObject} are on the way!`);
    }
    if(input === "PING")
    {
        bot.sendMessage(message, "Pong!");
    }
    if(input === "WHO MADE SHADOWBOT?")

    {
        let ownerUserObject = message.server.members.get('name', 'Techmo3014');
        bot.sendMessage(message, `${ownerUserObject} made me.`);
    }

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
