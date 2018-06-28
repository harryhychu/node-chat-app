var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');

});

socket.on('disconnect', function() {
	console.log('disconnect to server');
});

socket.on('newMessage', function (message) {
	console.log('new Message', message);
})