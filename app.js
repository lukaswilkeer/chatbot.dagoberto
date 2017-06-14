(() => {
	'use strict';
	const config = require('./config');
	const comandos = require('./code/comandos.talks');

	const dagoberto = config.bot

	comandos.Load(dagoberto);
	config.Start(); // Iniciando o sistema !

})()