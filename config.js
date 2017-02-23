(() => {
	'use strict';
	const express = require('express');
	const TeleBot = require('telebot');
	const https = require('https')

	const port = process.env.PORT || 5000;
	const app = express();
	const dotenv = require('dotenv');

	dotenv.load();

	
	const bot = new TeleBot({
		token: process.env.TOKENTELEGRAM, // Required.
		sleep: 1000, // Optional. How often check updates (in ms).
		timeout: 0, // Optional. Update pulling timeout (0 - short polling).
		limit: 100, // Optional. Limits the number of updates to be retrieved.
		retryTimeout: 5000 // Optional. Reconnecting timeout (in ms).
	});
	
	bot.connecct(); // Iniciando o Dagoberto	

	const onStart = () => {

		app.listen(port, () => {
			console.log(`Express server is listening on ${port}`);
		});

		app.get("/dev", (req, resp) => { resp.json({ to: "vivo" }) });

		


			
		let vinte_e_cinco_minutos = 1000 * 60 * 25 // ~30 minutos;

		cmd = setInterval(() => {

			https.get('https://tranquil-shore-86471.herokuapp.com', (res) => {
				bot.sendMessage(chatId, "Que sono....")
			}).on('error', (e) => {
				console.error(e);
			});

		}, vinte_e_cinco_minutos)


		require('./code/comandos.talks').Add(cmd);
	}


	module.exports = {
	   Start : onStart
	,	bot : bot
	};
})()