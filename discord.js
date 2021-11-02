module.exports = {

    UpdatePresence: function (state, details, largeImage, smallImage) {
        const client = require('discord-rich-presence')('669051598865039363')
        client.updatePresence({
            state: state,
            details: details,
            startTimestamp: Date.now(),
            largeImageKey: largeImage || 'blue',
            smallImageKey: smallImage || 'blue',
            instance: true,
        })
    }

}