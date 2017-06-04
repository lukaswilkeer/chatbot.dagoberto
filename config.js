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

	bot.connect(); // Iniciando o Dagoberto	

	const onStart = () => {

		app.listen(port, () => {
			console.log(`Express server is listening on ${port}`);
		});

		app.get("/dev", (req, resp) => { resp.json({ to: "vivo" }) });

		app.get("/", (req, resp) => {
			resp.redirect('/dev');
		})

	}


	module.exports = {
		Start: onStart
		, bot: bot
	};


})();