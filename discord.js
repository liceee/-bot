var Bot = require('discord-bot');
 
var bot = new Bot({
    email: <nangongsnow@gmail.com>,
    password: <tiantang>
});
 
bot
    .on(bot.triggers.command, 'hello')
    .do(function(bot, conf, args) {
        this.reply('world');
    });
 
bot.connect();