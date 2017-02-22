(()=>{

	
const TeleBot = require('telebot');
const bot = new TeleBot('299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI');

// bot.on('text', msg => {
//   let fromId = msg.from.id;
//   let firstName = msg.from.first_name;
//   let reply = msg.message_id;
//   return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
// });

bot.on('/hello', msg => {
  let [firstName, lastName] = msg.from.split(' ');
  return bot.sendMessage(msg.chat.id, `Hello, ${ firstName } ${ lastName }!`);
});


bot.connect();



})()