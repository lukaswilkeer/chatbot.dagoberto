const wakatime = () => console.log('pipico ta morrendo')

const hello = () => console.log('hello')

const helloModule = {
  'leandboard': {
    sentences: ['leandboard', 'wakatime'],
    action: wakatime
  }, 
  
  'wakeup': {
    sentences: ['acorda', 'acorda!'],
    action: hello
  }
}

module.exports = helloModule;