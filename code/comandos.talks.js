const cerbero = require('./cerbero.js')
const hello = require('../code/modules/hello')

const debug = (x) => console.log(x)

// process :: Object -> Response
const process = (msg) => {
	// TODO: Adicionar função para pegar todos os módulos
	const modulesList = [hello]
	const text = msg.text.split(' ')
	const maybeCommands = text.slice(1, text.length)
	const queue = cerbero(maybeCommands, modulesList)
	return queue
}

// botMention :: [String] -> Boolean
const botMention = (text) => text.split(' ')[0] == 'dagoberta' ? true : false

const onLoad = (dagoberto) => {
	dagoberto.on('text', (msg) => {
		botMention(msg.text) ? process(msg) : false
	})
}

module.exports = {
	Load: onLoad,
	botMention: botMention,
	process: process
}