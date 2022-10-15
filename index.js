const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});


//user logged in 
io.on('connection', (socket) =>{
    console.log ('a user connected');

    //user disconnected
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    });

    //chats going on 
    socket.on('chat_message', (msg)=>{
        console.log(msg.id +': ' + msg.input);
        // socket.emit('chat_message',{message: msg});
        io.sockets.emit('chat_message',{message: msg.input, id: msg.id})
    });


});



server.listen(3000, () => {
    console.log('listening on *:3000');
});