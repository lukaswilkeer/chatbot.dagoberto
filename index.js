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
	console.info(`To `,msg.chat);
	

	if(msg.from.id !== 101718483){ // Meu ID !
		return bot.sendMessage(msg.chat.id, `Apenas respondo meu mestre!!`);
	}

	console.log(msg.text.toLowerCase());

	if(msg.text.toLowerCase() === "Hey dagoberto"){
		return bot.sendMessage(msg.chat.id, `
			Oi ${msg.from.first_name}  !
			o que manda ?
		`);
	}

	bot.sendMessage(msg.chat.id, msg.text);

})

// bot.on(['*', '/*'], (msg, self) => {
//   let id = msg.chat.id;
//   let reply = msg.message_id;
//   let type = self.type;
//   let parse = 'html';
//   return bot.sendMessage(
//     id, `This is a <b>${ type }</b> message.`, { reply, parse }
//   );
// });




bot.connect();



})()