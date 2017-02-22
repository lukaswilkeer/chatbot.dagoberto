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


// On inline query
bot.on('inlineQuery', msg => {

  let query = msg.query;
  console.log(`inline query: ${ query }`);

  // Create a new answer list object
  const answers = bot.answerList(msg.id, { cacheTime: 60 });

  // Article
  answers.addArticle({
    id: 'query',
    title: 'Inline Title',
    description: `Your query: ${ query }`,
    message_text: 'Click!'
  });

  // Photo
  answers.addPhoto({
    id: 'photo',
    caption: 'Telegram logo.',
    photo_url: 'https://telegram.org/img/t_logo.png',
    thumb_url: 'https://telegram.org/img/t_logo.png'
  });

  // Gif
  answers.addGif({
    id: 'gif',
    gif_url: 'https://telegram.org/img/tl_card_wecandoit.gif',
    thumb_url: 'https://telegram.org/img/tl_card_wecandoit.gif'
  });

  // Send answers
  return bot.answerQuery(answers);

});


bot.connect();



})()