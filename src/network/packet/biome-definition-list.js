const fs = require('fs')

const DataPacket = require('./packet')
const Identifiers = require('../identifiers')


class BiomeDefinitionListPacket extends DataPacket {
    static NetID = Identifiers.BiomeDefinitionListPacket

    #cachedNBT

    encodePayload() {
        this.append(this.#cachedNBT ||
            (this.#cachedNBT = fs.readFileSync(__dirname + '/../../resources/biome_definitions.nbt')))
    }
}
module.exports = BiomeDefinitionListPacket
