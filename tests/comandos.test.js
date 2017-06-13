const chai = require('chai')
const expect = chai.expect
const should = chai.should
const bot = require ('../code/comandos.talks.js');

describe ('bot mention', () => {
  it('sumon bot from hell:', (done) => {
    const msg = {text: 'dagoberta acorda!'}
    bot.botMention(msg.text) ? bot.process(msg) : false
    done()
  })

  it('response type check:', (done) => {
    let fail = bot.botMention('fail')
    let rigth = bot.botMention('dagoberto')
    expect(fail).to.be.a('Boolean')
    expect(fail).to.be.false
    expect(rigth).to.be.a('Boolean')
    expect(rigth).to.be.true
    done()
  })
})

// isCommand :: String -> Boolean
describe ('isCommand', () => {
  it('type check:', (done) => {
    const command = 'hello'
    let expToFail = bot.isCommand('fail')(command)
    let expToPass = bot.isCommand('hello')(command)
    expect(expToFail).to.be.a('Boolean')
    expect(expToFail).to.be.false
    expect(expToPass).to.be.a('Boolean')
    expect(expToPass).to.be.true
    done()
  })
})

// findCommand :: Module -> String -> [Maybe Command]
describe ('findCommand', () => {
  it('test:', (done) => {
    const msg = 'hello'
    const talks = bot.talks()
    const checkTalks = bot.findCommand(talks)
    const commands = checkTalks(msg)
    expect(commands).to.be.a('Object')
    done()
  })
})