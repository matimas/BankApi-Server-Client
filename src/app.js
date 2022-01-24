require('dotenv').config();
require('./db/mongoose.js');
const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRouter = require('./routes/apiRoutes');

const publicPath = path.join(__dirname, '../client/build');

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(publicPath));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.use('*', (req, res) => {
	res.send('Something is Bad (: XD');
});
const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => {
	console.log('Server running on ' + PORT);
});
