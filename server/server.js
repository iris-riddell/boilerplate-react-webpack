const path = require('path')
const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/insults', routes)

module.exports = server
