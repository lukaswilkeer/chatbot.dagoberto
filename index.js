(() => {

const TelegramBot = require('node-telegram-bot-api');


// token gerado pelo @bot_father

// Dagoberto o Bot
// http://t.me/dabobertoobot

/**
 * This example demonstrates setting up a webook, and receiving
 * updates in your express app
 */

const TOKEN = '299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI';

/**
 * This example demonstrates setting up webhook
 * on the Heroku platform.
 */

const options = {
  webHook: {
    // Port to which you should bind is assigned to $PORT variable
    // See: https://devcenter.heroku.com/articles/dynos#local-environment-variables
    port: process.env.PORT
    // you do NOT need to set up certificates since Heroku provides
    // the SSL certs already (https://<app-name>.herokuapp.com)
    // Also no need to pass IP because on Heroku you need to bind to 0.0.0.0
  }
};
// Heroku routes from port :443 to $PORT
// Add URL of your app to env variable or enable Dyno Metadata
// to get this automatically
// See: https://devcenter.heroku.com/articles/dyno-metadata
const url = process.env.APP_URL || 'https://intense-wave-4233.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);


// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);


// Just to ping!
bot.on('message', function onMessage(msg) {
  bot.sendMessage(msg.chat.id, 'Eu estou vivo!');
});

})()