const express = require('express');
const apiRouter = express.Router();
const {
	addClients,
	getClientById,
	getActiveClient,
	deposit,
	transfer,
} = require('../controllers/useControllers');

apiRouter.post('/users/create', addClients);

apiRouter.get('/users', getClientById);

apiRouter.get('/users/active', getActiveClient);

apiRouter.put('/users/deposit', deposit);

apiRouter.put('/users/transfer', transfer);

// apiRouter.delete('/delete-one', deleteProduct);

// apiRouter.delete('/delete-all', deleteAllProducts);

apiRouter.put('/users/withdraw', withdraw);

module.exports = apiRouter;
