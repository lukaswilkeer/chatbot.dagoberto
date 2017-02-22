(() => {


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

	app.get("/dev", (req, resp) => { resp.json({ to: "vivo" }) });



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


	bot.on('text', (msg) => {

		// Não é nenhuma ação, apenas conversa normal
		if (!msg.entities) { return; }


		// Houve uma invocaçào do bot mas não é uma mensão
		if (msg.entities[0].type !== "mention") { return; }


		if (msg.from.id === 101718483) { // Meu ID !
			bot.sendMessage(msg.chat.id, `<3`);
		}
		
		let mensagem = msg.text.replace("@dagobertoobot ", "");
		return bot.sendMessage(msg.chat.id, `Desculpa,
			 Não faço muita coisa ${msg.from.first_name}, mas quem quando eu ficar mais velho`);



	})


	let loop;


	bot.on('/viva', msg => {

		let chatId = msg.chat.id;

		return bot.sendMessage(chatId, `
Até que fim estou vivo o/ 
Ainda não estou 100%, mas todo dia as 18h vou mandar mensagem aqui pedindo para vocês enviarem as atividades para a @ba_oliveira
Obrigado por me aceitarem <3
		`).then(re => {
			// Start updating message

			console.log(re);

			let horaemhora = 1000*60*30; // de meia em meia hora faz a checagem !
			let horaAtual = null; 

			loop = setInterval(x => {

				horaAtual = new Date()
								.toTimeString()
								.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
								;

				console.log(horaAtual)
				console.log(horaAtual.substr(0,5));
				
				// #TODO: Fazer ficar no horário de brasilia !
				//  Diminuir 3 horas pra ficar certinho ! 
				// 21:00 == 18:00 em Sampa ! 
				if (horaAtual.substr(0,5) == "21:00") {

					console.log(`----------------`)
					bot.sendMessage(chatId, `
							Já viu que horas são ? ${horaAtual}
						`)
						.catch(error => console.log('Error:', error));
				}


			}, horaemhora);


		});

	});

	bot.on('/durma', msg => {


		if (msg.from.id !== 101718483) { // Meu ID !
			return bot.sendMessage(msg.chat.id, `Só meu criador tem o poder de me mandar dormir`);
		}

		let chatId = msg.chat.id;

		clearInterval(loop);

		return bot.sendMessage(chatId, ` To indo ! `);

		
	})


	bot.connect();



})()