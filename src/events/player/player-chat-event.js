const PlayerEvent = require('./player-event')


class PlayerChatEvent extends PlayerEvent {
    #message

    constructor(player, message) {
        super(player)
        this.#message = message
    }

    getMessage() {
        return this.#message
    }

    setMessage(message) {
        this.#message = message
    }
}
module.exports = PlayerChatEvent
