

var socket = io.connect();
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

var item = document.createElement('li');
item.textContent = "yaho";
body.appendChild(item);


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
    socket.emit('chat_message', input.value);
    input.value = '';
    }

});


socket.on('chat_message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

