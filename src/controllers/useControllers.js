const Client = require('../models/clientSchema');

const addClients = async (req, res) => {
	try {
		const client = await Client.create(req.body);
		console.log(client);
		res.status(201).send('Saved');
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getClientById = async (req, res) => {
	try {
		let client = '';
		if (!req.query.id) {
			client = await Client.find();
		} else {
			client = await Client.where('_id').equals(req.query.id);
		}
		res.status(200).send(client);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const getActiveClient = async (req, res) => {
	try {
		const client = await Client.where('isActive').equals(true);
		res.status(200).send(client);
	} catch (error) {
		res.status(400).send(error.message);
	}
};
const isUserExist = async (id) => {
	const client = await Client.where('_id').equals(id);
	if (!client) return false;
	return client[0];
};
const deposit = async (req, res) => {
	try {
		const { id, amount } = req.body;
		const client = await isUserExist(id);
		if (!client) throw new Error('Invalid User try again');
		const newAmount = client.cash + amount;
		await Client.findByIdAndUpdate(id, {
			$set: { cash: newAmount },
		});
		res.status(201).send({ message: 'client updated', client });
	} catch (error) {
		res.status(400).send({ err: error.message });
	}
};
const transfer = async (req, res) => {
	try {
		const { id, amount } = req.body;
		const client = await isUserExist(id);
		if (!client) throw new Error('Invalid User try again');
		const newAmount = client.cash + amount;
		await Client.findByIdAndUpdate(id, {
			$set: { cash: newAmount },
		});
		res.status(201).send({ message: 'client updated', client });
	} catch (error) {
		res.status(400).send({ err: error.message });
	}
};

module.exports = {
	addClients,
	getClientById,
	getActiveClient,
	deposit,
	transfer,
};
