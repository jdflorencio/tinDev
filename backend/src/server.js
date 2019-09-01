const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
require('dotenv').config()

io.on('connection', server => {
    console.log('nova conexão', socket.id)
})

mongoose.connect(process.env.DB_HOST, 
{
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333);