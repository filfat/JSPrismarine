const fs = require('fs')

const DataPacket = require('./packet')
const Identifiers = require('../identifiers')


class AvailableActorIdentifiersPacket extends DataPacket {
    static NetID = Identifiers.AvailableActorIdentifiersPacket

    #cachedNBT

    encodePayload() {
        this.append(this.#cachedNBT ||
        (this.#cachedNBT = fs.readFileSync(__dirname + '/../../resources/entity_identifiers.nbt')))
    }
}
module.exports = AvailableActorIdentifiersPacket
