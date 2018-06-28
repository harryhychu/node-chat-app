var socket = io();

socket.on('connect', function() {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'browser',
		text: 'hi i am browser xxx'
	})

});

socket.on('disconnect', function() {
	console.log('disconnect to server');
});

socket.on('newMessage', function (message) {
	console.log('new Message', message);
})