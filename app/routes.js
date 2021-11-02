const express = require('express')

module.exports = function (app) {

    app.get('/', (req, res) => {
        res.render('index')

        process.discord.UpdatePresence('Navigating the Dashboard')
    })

}