const { app, BrowserWindow, globalShortcut } = require('electron')
const fs = require('fs')
process.discord = require('./discord.js')

app.on('ready', () => {
    process.Window = new BrowserWindow({
        width: 1000,
        height: 600,
        minWidth: 600,
        minHeight: 400,
        autoHideMenuBar: true,
        darkTheme: true,
        icon: './assets/images/fav.ico',
        title: 'Horizons Link'
    })

    globalShortcut.register('f5', () => process.Window.reload())

    process.Window.loadFile('./public/loading.html')
    process.discord.UpdatePresence('Loading...')
})



//!
//! Express
//!

const express = require('express')
const exp = express()
exp.listen(5000, () => {
    console.log('Server started on port 5000')
    setTimeout(() => {process.Window.loadURL('http://localhost:3000')}, 3000)
})
exp.set('view engine', 'ejs')
exp.use('/assets', express.static('assets'))

fs.readdirSync('./app').forEach(file => {
    if (file.includes('.js')) {
        require(`./app/${file}`)(exp)
    }
})