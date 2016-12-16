// load activities
console.log('activities model');

// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require other models
require('./users.js');

// create schema
var ActivitySchema = new mongoose.Schema({
	title: {type: String, required: true, minlength: 3},
	description: {type: String, required: true, minlength: 4},
	complete: {type: Boolean, default: false},
	_user: {type: Schema.Types.ObjectId, ref: 'User'}}
, { timestamps: true });

// register interest schema
mongoose.model('Activity', ActivitySchema);