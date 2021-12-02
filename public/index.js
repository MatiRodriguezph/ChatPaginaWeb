const socket = io();

let input = document.getElementById('mensaje');
let user = document.getElementById('user');


input.addEventListener('keyup', (event) => {
    //para que una tecla sea quien envie el mensaje
    if(event.key=== 'Enter'){
        if(event.target.value){
            socket.emit('message', {user:user.value,message:event.target.value});
        }
        //si no hay mensaje no se envia
        else{
            console.log('No enviado');
        }
    }
});
socket.on('welcome',data=>{
   alert(data);
});
socket.on('messagelog',data=>{
    let p = document.getElementById('log');
    let mensajes = data.map(message=>{
        return `<div><p>${message.user} dice: ${message.message}</p></div>`
    }).join('');
    p.innerHTML=mensajes;
});