(() => {


	const onLoad = (dagoberto) => {

		dagoberto.on('text', (msg) => {

			console.log(msg);

			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }

			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }


			let mensagem = msg.text.replace("@dagobertoobot ", "");

			let chatId = msg.chat.id;
			dagoberto.sendMessage(msg.chat.id, `Desculpem, ${msg.from.first_name} ainda estou em construção`);
			dagoberto.sendMessage(chatId, ` Está aqui doutor! 
	${msg} 

	----

	${JSON.stringify(msg)}
	`);

		})

	}





	module.exports = {
		Load: onLoad
	}

})()