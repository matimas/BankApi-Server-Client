const { model, Schema } = require('mongoose');
// var arrayValidator = require('mongoose-array-validator');
// const validator = require('validator');

const clientSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	cash: {
		type: Number,
	},
	credit: {
		type: Number,
		min: 0,
	},
	isActive: Boolean,
});

module.exports = model('client', clientSchema);
