(() => {
	'use strict';

	
	const config = require('./config');
	

	const conversa = require('./code/talks/citou.talks');
	const comandos = require('./code/comandos.talks');


	const dagoberto = config.bot

	comandos.Load(dagoberto);
	conversa.Load(dagoberto);

	config.Start(); // Iniciando o sistema !

})()