// checkSentence :: String -> [String] -> Bolean
const checkSentence = (sentence, commands) => commands.includes(sentence)

// checkCommand :: Object -> String -> [String] -> Boolean
const checkCommand = (module) => (fn) => (commands) => {
  let has = module[fn].sentences.map((sentence) => checkSentence(sentence, commands))
  return has
}

// checkModule :: Object -> [Object]
const checkModule = (module, commands) => {
  const actions = Object
    .keys(module)
    .filter((key) => checkCommand(module)(key)(commands).includes(true))

    let response = actions.map((fn) => module[fn].action)
    return response
}

// queue :: [String] -> [Object] -> [Function]
const queue = (commands, modulesList) => {
  return modulesList.map((module) => checkModule(module, commands))
}

module.exports = queue