const express = require('express')
const server = express.Router()

server.route('/').get((req, res) => {
    res.sendFile(__dirname + '/index.html')
})
server.route('/dados').get((req, res) => {
    res.sendFile(__dirname + '/dados.html')
})

module.exports = server
