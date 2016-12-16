// load user model
console.log('user model');

// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// require other models
require('./activities.js');

// create schema
var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 2},
	activity: [{type: Schema.Types.ObjectId, ref: 'Activity'}]
}, { timestamps: true });


// register friend schema
mongoose.model('User', UserSchema);