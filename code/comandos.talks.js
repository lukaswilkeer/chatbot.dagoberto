(() => {





	const cmd_list = [];

	const onAdd = (cmd) => { cmd_list.push(cmd); }

	const onClear = (cmd) => {
		cmd_list[cmd] = null;
		return clearInterval(cmd);
	}

	const onClearAll = () => {
		return cmd_list.forEach((cmd) => { limpar_comandos(cmd) })
	}

	const onLoad = (dagoberto) => {

		dagoberto.on('text', msg => {

			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }


			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }

			// pegando só o texto da mensagem!
			let mensagem = msg.text.replace("@dagobertoobot", "");

			// Tem a palavra Acorda na mensagem !
			if (mensagem.toLowerCase().indexOf("acorda") < 0) { return; }

			// Chat ID da mensagem.
			let chatId = msg.chat.id;

			dagoberto.sendMessage(chatId, `Opa o/ \n to aqui pra ajudar!`)
				.then((re) => {

					// de meia em meia hora faz a checagem !
					let horaemhora = 1000 * 60 * 30;
					let horaAtual = null;

					let cmd = setInterval(x => {

						horaAtual = new Date()
							.toTimeString()
							.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
							;


						// #TODO: Fazer ficar no horário de brasilia !
						//  Diminuir 3 horas pra ficar certinho ! 
						// 21:00 == 18:00 em Sampa ! 
						if (horaAtual.substr(0, 5) == "11:00") {

							dagoberto.sendMessage(chatId, `Já viu que horas são ? ${horaAtual}`)
								.catch(error => console.log('Error:', error));

						}


					}, horaemhora);

					onAdd(cmd); // adiciona o comando em loop !

				});
		});



		dagoberto.on('text', msg => {

			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }


			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }


			let mensagem = msg.text.replace("@dagobertoobot ", "");


			if (mensagem.toLowerCase() !== "vai dormir") { return; }


			if (msg.from.id !== JORGEIDTELEGRAM) { // Meu ID !
				return dagoberto.sendMessage(msg.chat.id, `Só meu criador tem o poder de me mandar dormir`);
			}

			let chatId = msg.chat.id;

			onClearAll();


			return dagoberto.sendMessage(chatId, ` To indo ! `);


		})


		dagoberto.on('text', (msg) => {
			
			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }


			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }


			let mensagem = msg.text.replace("@dagobertoobot ", "");

			console.log(mensagem)
			if (mensagem.toLowerCase() !== "seus documentos") { return; }

			let chatId = msg.chat.id;

			return dagoberto.sendMessage(chatId, ` Está aqui doutor! 
				${msg} 

				----

				${JSON.stringify(msg)}
			 `);
		})

	}





	module.exports = {
		Add: onAdd,
		Clear: onClear,
		ClearAll: onClearAll,
		Load: onLoad
	}

})()