const cerbero = require('./cerbero.js')
const hello = require('../code/modules/hello')

const debug = (x) => console.log(x)

// process :: Object -> Response
const process = (dagoberta) => (msg) => {
	// TODO: Adicionar função para pegar todos os módulos
	const modulesList = [hello]
	const text = msg.text.split(' ')
	const maybeCommands = text.slice(1, text.length)
	const queue = cerbero(maybeCommands, modulesList)
	// [Function]
	queue.map((fn) => dagoberta.sendMessage(msg.chat.id, fn[0]))
	// Executar cada função, retornar suas respostas num array e executar o send messange.
	//dagoberta.sendMessage(msg.chat.id, 'Mensagem')
}

// botMention :: [String] -> Boolean
const botMention = (text) => text.split(' ')[0] == 'dagoberta' ? true : false

const onLoad = (dagoberto) => {
	dagoberto.on('text', (msg) => {
		const actions = botMention(msg.text) ? process(dagoberto)(msg) : false
	})
}

module.exports = {
	Load: onLoad,
	botMention: botMention,
	process: process
}