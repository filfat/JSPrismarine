const BaseEvent = require('../base-event')


class PlayerEvent extends BaseEvent {
    #player

    constructor(player) {
        super()
        this.#player = player
    }

    getPlayer() {
        return this.#player
    }
}
module.exports = PlayerEvent
