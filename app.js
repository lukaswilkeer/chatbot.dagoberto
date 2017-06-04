(() => {
	'use strict';


	const config = require('./config');


	const comandos = require('./code/comandos.talks');
	const dagoberto = config.bot

	conversa.Load(dagoberto);

	config.Start(); // Iniciando o sistema !

})()