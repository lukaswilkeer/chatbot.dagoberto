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

	const JORGEIDTELEGRAM = 101718483;
	

	const app = express();
	// Start Express Server

	app.listen(port, () => {
		console.log(`Express server is listening on ${port}`);
	});

	app.get("/dev", (req, resp) => { resp.json({ to: "vivo" }) });


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


		if (msg.from.id === JORGEIDTELEGRAM) { // Meu ID !
			bot.sendMessage(msg.chat.id, `<3`);
		}
		
		let mensagem = msg.text.replace("@dagobertoobot ", "");

		if("bom dia".indexOf(mensagem.toLowerCase())){
			return bot.sendMessage(msg.chat.id, `Bom dia, ${msg.from.first_name} :D, Já tomou o café dos campeões? `);
		}

		return bot.sendMessage(msg.chat.id, `Desculpa,Não faço muita coisa ${msg.from.first_name}, mas quem sabe quando eu ficar mais velho`);



	})


	let loop;


	bot.on('text', msg => {

		// Não é nenhuma ação, apenas conversa normal
		if (!msg.entities) { return; }


		// Houve uma invocaçào do bot mas não é uma mensão
		if (msg.entities[0].type !== "mention") { return; }


		let mensagem = msg.text.replace("@dagobertoobot ", "");


		if (mensagem !== "acorda") { return ; }


		let chatId = msg.chat.id;

		bot.sendMessage(chatId, `Opa o/ \n to aqui pra ajudar!`)
		.then(re => {
			// Start updating message

			console.log(re);

			let horaemhora = 1000*60*30; // de meia em meia hora faz a checagem !
			let horaAtual = null; 

			loop[0] = setInterval(x => {

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

		if(!loop[1]){ return; } // Se tiver ativado isso não precisa disparar outra véz

		const https = require('https')
		let vinte_e_cinco_minutos = 1000*60*25 // ~30 minutos;

		loop[1] = setInterval( () => {

			https.get('https://tranquil-shore-86471.herokuapp.com', (res) => {
				bot.sendMessage(chatId, "Que sono....")
			}).on('error', (e) => {
				console.error(e);
			});

		},vinte_e_cinco_minutos)

	});

	bot.on('text', msg => {

		// Não é nenhuma ação, apenas conversa normal
		if (!msg.entities) { return; }


		// Houve uma invocaçào do bot mas não é uma mensão
		if (msg.entities[0].type !== "mention") { return; }


		let mensagem = msg.text.replace("@dagobertoobot ", "");


		if (mensagem !== "vai dormir") { return ; }


		if (msg.from.id !== JORGEIDTELEGRAM) { // Meu ID !
			return bot.sendMessage(msg.chat.id, `Só meu criador tem o poder de me mandar dormir`);
		}

		let chatId = msg.chat.id;

		loop.forEach((comando) => {
			clearInterval(comando);
		})
		

		return bot.sendMessage(chatId, ` To indo ! `);

		
	})


	



	bot.connect();


	

	


})()