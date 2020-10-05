const Command = require('../command')
const Player  = require('../../player')
const ConsoleSender = require('../console-sender')
const Logger = require('../../utils/logger')


class MeCommand extends Command {

    constructor() {
        // TODO: add permissions to command
        super({name: 'me', description: 'Displays custom message in chat.'})
    }

    /**
     * @param {ConsoleSender|Player} sender
     * @param {Array} args
     */
    execute(sender, args) {
        if (!args[0]) {
            return sender.sendMessage(`§cPlease specify a message.`)
        } 

        let message = args.join(' ')
        let messageToSend = `*${sender.name}: ${message}`

        Logger.silly(messageToSend)
        for (let player of sender.getServer().players.values()) {
            player.sendMessage(messageToSend)
        }
    }
}

module.exports = MeCommand
