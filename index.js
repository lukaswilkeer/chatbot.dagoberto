(()=>{

	
const TeleBot = require('telebot');
const bot = new TeleBot('299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI');

// bot.on('text', msg => {
//   let fromId = msg.from.id;
//   let firstName = msg.from.first_name;
//   let reply = msg.message_id;
//   return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
// });

bot.on('/help', msg => {
	console.log(msg);
//   let [firstName, lastName] = msg.from;
  return bot.sendMessage(msg.chat.id, `Olá Mestre!`);
});

bot.on('text', msg => {

	console.info(`Msg `,msg);
	console.info(`From `,msg.from);
	console.info(`To `,msg.to);
	

	if(msg.from.id !== 101718483){ // Meu ID !
		bot.sendMessage(msg.chat.id, `Apenas respondo meu mestre!!`);
	}

	bot.sendMessage(msg.chat.id, msg.text);

})



bot.connect();



})()