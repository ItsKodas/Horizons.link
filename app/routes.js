const express = require('express')
const fetch = require('node-fetch')

module.exports = function (app) {

    // app.get('/', (req, res) => {
    //     res.render('index')

    //     process.discord.UpdatePresence('Navigating the Dashboard')
    // })

    app.get('/', async (req, res) => {

        var user = {
            id: '12345',
            name: 'Joe',
            age: 18
        }

        res.json(user)
    })

}