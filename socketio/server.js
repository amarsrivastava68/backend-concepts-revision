const express = require('express')
const http = require('http')
const socketIo = require('socket.io')


const app = express()

const server  =     http.createServer(app)

//initiate socket .io and attach this to the http server . 

 const io = socketIo(server)
 app.use(express.static('public'))
 const users = new Set()
 io.on('connection', socket=>{ console.log('new user is connected')
    //handle users when they join chat 
    socket.on('join', (userName)=>{ users.add(userName)
        io.emit('userJoined' , userName)
        io.emit('userList' , Array.from(users))
    })

    //handle incoming chat message 

    //handle user disconnection 
 })

 server.listen("1234" , ()=> console.log('server running on port 1234'))