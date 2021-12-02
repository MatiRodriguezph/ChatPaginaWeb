const express = require('express');
const {Server} = require('socket.io');
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


app.use(express.static(__dirname+'/public'));
const io = new Server(server);

let messages = [];

io.on('connection',socket=>{
    console.log('Nuevo cliente conectado');
    socket.emit('messagelog',messages);
    socket.emit('welcome','Bienvenido a mi app');
    socket.on('message',data=>{
        messages.push(data);
        io.emit('messagelog',messages);
    });
});