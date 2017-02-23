(() => {
	'use strict';

	/// dagobert == bot == telebot 
	const onLoad = (dagoberto) => {

		dagoberto.on('text', (msg) => {

			// Não é nenhuma ação, apenas conversa normal
			if (!msg.entities) { return; }


			// Houve uma invocaçào do bot mas não é uma mensão
			if (msg.entities[0].type !== "mention") { return; }


			if (msg.from.id === process.env.JORGEIDTELEGRAM) { // Meu ID !
				dagoberto.sendMessage(msg.chat.id, `<3`);
			}

			let mensagem = msg.text.replace("@dagobertoobot ", "");

			if ("bom dia".indexOf(mensagem.toLowerCase() >= 0)) {
				return dagoberto.sendMessage(msg.chat.id, `Bom dia, ${msg.from.first_name} :D, Já tomou o café dos campeões? `);
			}

			return dagoberto.sendMessage(msg.chat.id, `Desculpa,Não faço muita coisa ${msg.from.first_name}, mas quem sabe quando eu ficar mais velho`);


		})

	}

	module.exports = {
		Load: onLoad
	}
})()