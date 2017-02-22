(() => {

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

// token gerado pelo @bot_father

// Dagoberto o Bot
// http://t.me/dabobertoobot

/**
 * This example demonstrates setting up a webook, and receiving
 * updates in your express app
 */

const TOKEN = '299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI';

/**
 * This example demonstrates setting up a webook, and receiving
 * updates in your express app
 */

const url = 'https://tranquil-shore-86471.herokuapp.com';
const port = process.env.PORT;



// No need to pass any parameters as we will handle the updates with Express
const bot = new TelegramBot(TOKEN);

// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();

// parse the updates to JSON
app.use(bodyParser.json());

// We are receiving updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
  console.log(req)
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start Express Server
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

// Just to ping!
// bot.on('message', msg => {
//   bot.sendMessage(msg.chat.id, 'I am alive!');
// });

bot.onText(/\/echo (.+)/, (msg, match) => {

  console.log(msg);

  const chatId = msg.chat.id; // Id do chat que veio a mensagem ! 
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);

});

bot.onText('Hey Dagoberto', (msg, match) => {

  console.log(msg);

  const chatId = msg.chat.id; // Id do chat que veio a mensagem ! 
  const resp = match[1]; // the captured "whatever"

  bot.sendMessage(chatId, resp);

});



})()  