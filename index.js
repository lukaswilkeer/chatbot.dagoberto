(() => {

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const TOKEN_TELEGRAM = `` ;
// token gerado pelo @bot_father

// Dagoberto o Bot
// http://t.me/dabobertoobot

/**
 * This example demonstrates setting up a webook, and receiving
 * updates in your express app
 */

const TOKEN = process.env.TELEGRAM_TOKEN || '299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI';
const url = 'https://intense-wave-42330.herokuapp.com/';
const port = process.env.PORT || 5000;



// No need to pass any parameters as we will handle the updates with Express
const bot = new TelegramBot(TOKEN);

// This informs the Telegram servers of the new webhook.
bot.setWebHook(`${url}/bot${TOKEN}`);

const app = express();

// parse the updates to JSON
app.use(bodyParser.json());

// We are receiving updates at the route below!
app.post(`/bot${TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start Express Server
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

// Just to ping!


app.get('/dev', (req,resp) => {
 resp.json({ dagoberto : "Está vivo "})
})


// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'I am alive!');
});

})()