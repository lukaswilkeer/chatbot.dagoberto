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

	
	if(msg.from.id !== 101718483){ // Meu ID !
		return bot.sendMessage(msg.chat.id, `Apenas respondo meu mestre!!`);
	}

	
	if(msg.text.toLowerCase() === "hey dagoberto"){

		return bot.sendMessage(msg.chat.id, `
			Oi ${msg.from.first_name}  !
			o que manda ?
		`);

	}

	// bot.sendMessage(msg.chat.id, msg.text);

})

bot.on(/@dagobertoobot (.+)/, (msg, match) => {

	console.log(match);
	return bot.sendMessage(msg.chat.id, `Olá Mestre!`);

})

bot.on('/começa', msg => {

  return bot.sendMessage(msg.from.id, 'Getting time...').then(re => {
    // Start updating message
    updateTime(msg.from.id, re.result.message_id);
  });

});

function updateTime(chatId, messageId) {

  // Update every second
  setInterval(x => {
    bot.editText(
      { chatId, messageId }, `<b>Current time:</b> ${ time() }`,
      { parse: 'html' }
    ).catch(error => console.log('Error:', error));
  }, 1000);

}

function time() {
  return new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}


bot.connect();



})()