const commands = ['/start', '/help', '/pomodoro', '/leandboard'];

const talks = () => {
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

// process :: Object -> Response
const process = (msg) => {
	const knowledge = talks()
	const text = msg.text
}

const botMention = (text) => text.indexOf('dagoberta') == 0 ? true : false

const onLoad = (dagoberto) => {
	dagoberto.on('text', (msg) => botMention(msg.text) ? process(msg) : false)
}

module.exports = {
	Load: onLoad
}