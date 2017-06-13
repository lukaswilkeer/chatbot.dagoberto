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
			sentences: ['acorda!'],
			action: () => {console.log('hello')}
		}
	}
}

const debug = (x) => console.log(x)

// isCommand :: String -> String -> Boolean
const isCommand = (command) => (sentence) => command == sentence ? true : false;

// checkCommands :: Module, [String] -> Bololean
const checkCommand = (module, maybeCommand) => {
	const hasCommand = isCommand(maybeCommand)
	Object.keys(module).map((fn) => {
		let response = module[fn].sentences.filter(hasCommand)
		return response ? true : false
	})	
}

// findCommand :: Module -> [String] -> [Maybe Command]
const findCommand = (module) => (maybeCommands) => {
	const result = maybeCommands.filter((maybeCommand) => checkCommand(module, maybeCommand))
	return result
}

// process :: Object -> Responsegjt
const process = (msg) => {
	const modules = [wakatimeModule()]
	const text = msg.text.split(' ')
	const maybeCommands = text.slice(1, text.length)
	
	const commands = modules.map((module) => findCommand(module)(maybeCommands))
	return commands
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
	isCommand: isCommand,
	findCommand: findCommand,
	botMention: botMention,
	talks: wakatimeModule,
	process: process
}