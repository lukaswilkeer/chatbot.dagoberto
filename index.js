(()=>{

	
const TeleBot = require('telebot');
const bot = new TeleBot({
  token: '299692951:AAGgYFsiu57O2Th84QPb58aIB21eohdQvEI', // Required.
  sleep: 1000, // Optional. How often check updates (in ms).
  timeout: 0, // Optional. Update pulling timeout (0 - short polling).
  limit: 100, // Optional. Limits the number of updates to be retrieved.
  retryTimeout: 5000 // Optional. Reconnecting timeout (in ms).
});

const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
// Start Express Server
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});

app.get("/dev",(req,resp) => { resp.json({ to:"vivo"})} );



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

	// bot.sendMessage(msg.chat.id, msg.text);

})

bot.on('text', (msg) => {

	// Não é nenhuma ação, apenas conversa normal
	if(!msg.entities){ return ; }


	// Houve uma invocaçào do bot mas não é uma mensão
	if(msg.entities[0].type !== "mention"){ return; }
	

	// Será que vai ?

	let mensagem = msg.text.replace("@dagobertoobot ","");
	return bot.sendMessage(msg.chat.id, `Olá Mestre! Você disse ${mensagem} ?`);

	

})

bot.on('/viva', msg => {

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


// On inline query
bot.on('inlineQuery', msg => {

  let query = msg.query;
  console.log(`inline query: ${ query }`);

  // Create a new answer list object
  const answers = bot.answerList(msg.id, { cacheTime: 60 });

  query = query.toLowerCase();

  if(query.indexOf("o que tenho para hoje ?") >= 0){
	  
	answers.addArticle({
		id: '1',
		title: 'Fica a dica',
		description: `Para falar comigo, só me citar quando for falar`,
		message_text: 'Isso ai ;) !'
	});

  }

  // Send answers
  return bot.answerQuery(answers);

});


bot.connect();



})()