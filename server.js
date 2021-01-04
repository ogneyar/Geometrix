var express = require('express');
var	port = process.env.PORT || 80;
var	host = process.env.HOST || "0.0.0.0";
	
express().use(express.static('dist'))
    .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .listen(port, host, () => console.log(`Starting server. Listening on ${ port }`));
