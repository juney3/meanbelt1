// confirm that mongoose.js loaded
console.log('mongo connection, mongoose setup');

var mongoose = require('mongoose'),

// require file system so we can load, read, and require all model files
	fs = require('fs'),

// utilize path for easy dir/file joining
	path = require('path'),

// dir where models are located
	models_path = path.join(__dirname, '../models'),

// regex that checks for .js extension
	reg = new RegExp( '.js$', 'i'),

// database info
	dbURI = 'mongodb://localhost/meanbelt';

// connect to DB
	mongoose.connect( dbURI );

// Use native promises
mongoose.Promise = global.Promise;


// 	CONNECTION EVENTS
// 	when successfully connected

mongoose.connection.on( 'connected', function() {
	console.log(`Mongoose default connection open to ${ dbURI }` );
});

// if connection throws an error
mongoose.connection.on( 'error', function(err) {
	console.error(`Mongoose default connection error: ${err}`);
});


// when connection is disconnected
mongoose.connection.on ('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});

// If Node process ends, close the Mongoose connection

process.on( 'SIGINT', function() {
	mongoose.connection.close( function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit( 0 );
	});
});

// Read all files in models dir and check whether it is a JS file before requiring it
fs.readdirSync( models_path ).forEach( function( file ) {
	if( reg.test( file )){
		require( path.join( models_path, file));
	}
});


