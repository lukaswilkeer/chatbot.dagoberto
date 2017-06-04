(() => {


	const onLoad = (dagoberto) => {

		dagoberto.on('text', (msg) => {

			console.log(msg);

			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }

			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }

			// Mensão de outras pessoas, mas não do Dagoberto.
			if (msg.text.indexOf("@dagobertoobot") < 0) { return; }

			let mensagem = msg.text.replace("@dagobertoobot ", "");

			let chatId = msg.chat.id;


			switch (mensagem) {

				case 'dados':
					dagoberto.sendMessage(chatId, ` Está aqui doutor!  ${msg}  \n ----\n ${JSON.stringify(msg)} `);
					break;
				case 'horas':
					dagoberto.sendMessage(chatId, ` Agora são no servidor : ${new Date()}`);

					break;

				default:
					dagoberto.sendMessage(chatId, `Desculpem, ${msg.from.first_name} ainda estou em construção`);
					break

			}



		})

	}





	module.exports = {
		Load: onLoad
	}

})()