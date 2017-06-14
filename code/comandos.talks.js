const config = require('../config.js')
const hello = require('../code/modules/hello')
const cerbero = require('./cerbero.js')

// process :: Object -> Response
const process = (dagoberta) => (msg) => {
	// TODO: Adicionar função para pegar todos os módulos
	const modulesList = [hello]
	const text = msg.text.split(' ')
	const maybeCommands = text.slice(1, text.length)
	const queue = cerbero(maybeCommands, modulesList)
	queue.map((fn) => dagoberta.sendMessage(msg.chat.id, fn[0]))
}

// botMention :: [String] -> Boolean
const botMention = (text) => text.split(' ')[0] == config.mention ? true : false

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