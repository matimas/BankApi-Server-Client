const mongoose = require('mongoose');
require('dotenv').config();
const PASSWORD = process.env.PASS;
mongoose.connect(
	`mongodb+srv://matimas:${PASSWORD}@cluster0.yx1p2.mongodb.net/myBankClient?retryWrites=true&w=majority`,
	() => {
		console.log('mongoDB connected');
	},
	(e) => console.error(e),
);
