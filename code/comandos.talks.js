/* Type
Command: Object { sentences: String, action: Function }
*/

//const commands = ['/start', '/help', '/pomodoro', '/leandboard'];

const wakatimeModule = () => {
	const wakatime = () => console.log('pipico ta morrendo')

	return {
		'leandboard': {
			sentences: ['leandboard', 'wakatime'],
			action: wakatime
		}, 
		
		'hello': {
			sentences: ['hello'],
			action: () => {console.log('hello')}
		}
	}
}

const debug = (x) => console.log(x)

// isCommand :: String -> String -> Boolean
const isCommand = (commands) => (sentence) => msg == sentence ? true : false;

// checkCommands :: Module, [String] -> Bololean
const checkCommand = (module) => (command) => {
	console.log(module)
	console.log('teste aqui')
	module.filter((fn) => )
}

// findCommand :: Module -> [String] -> [Maybe Command]
const findCommand = (module) => (maybeCommands) => {
	// Caso haja alguma sentenca que bata com o commando retorna a sunção
	//Object.keys(module).map((fn) => checkCommands(fn)(commands))
	maybeCommands.map((maybeCommand) => checkCommand(module)(maybeCommand))
}

// process :: Object -> Responsegjt
const process = (msg) => {
	const modules = [wakatimeModule()]
	const text = msg.text.split(' ')
	const maybeCommands = text.slice(1, text.length)
	
	const commands = modules.map((module) => findCommand(module)(maybeCommands))
}

// botMention :: [String] -> Boolean
const botMention = (text) => text.split(' ')[0] == 'dagoberta' ? true : false

const onLoad = (dagoberto) => {
	dagoberto.on('text', (msg) => {
		console.log('msg: ', msg.text)
		botMention(msg.text) ? process(msg) : false
	})
}

module.exports = {
	Load: onLoad,
	isCommand: isCommand,
	findCommand: findCommand,
	botMention: botMention,
	talks: wakatimeModule,
	process: process
}