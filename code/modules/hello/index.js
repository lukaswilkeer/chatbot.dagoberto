const wakatime = () => console.log('pipico ta morrendo')

const greatings = () => {
  return 'Yay!'
}

const hello = () => {
  return 'Always here!'
}

const helloModule = {
  'leandboard': {
    sentences: ['leandboard', 'wakatime'],
    action: wakatime
  }, 
  
  'wakeup': {
    sentences: ['acorda', 'acorda!'],
    action: hello()
  },

  'comprimento': {
    sentences: ['Ta bem?'],
    action: greatings()
  }
}

module.exports = helloModule;