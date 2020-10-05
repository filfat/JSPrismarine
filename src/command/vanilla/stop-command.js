const Command = require('../command')
const Player  = require('../../player')
const ConsoleSender = require('../console-sender')


class StopCommand extends Command {

    constructor() {
        super({name: 'stop', description: 'Stops a server.'})
    }

    /**
     * @param {ConsoleSender|Player} sender
     * @param {Array} args
     */
    async execute(sender, args) {
        // TODO: implement operators and just check if player is operator
        
        await sender.getServer().getServer().kill()

        sender.getServer().getLogger().warn('Server is closing...')
        setTimeout(() => { process.exit(0) }, 1000)
    }
}
module.exports = StopCommand
