(() => {
	'use strict';

	
	const config = require('./config');
	config.Start(); // Iniciando o sistema !

	const conversa = require('./code/talks/citou.talks');
	const comandos = require('./code/comandos.talks');


	const dagoberto = config.bot

	comandos.Load(dagoberto);
	conversa.Load(dagoberto);


})()