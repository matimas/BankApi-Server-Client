import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Typography } from 'antd';
import './App.css';
import {
	Navbar,
	CreateUser,
	UserDetails,
	MoneyTransfer,
	Deposit,
	Withdraw,
	CreditUpdate,
} from './components';

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/user-details'>
								<UserDetails />
							</Route>
							<Route exact path='/create-user'>
								<CreateUser />
							</Route>
							<Route exact path='/money-transfer'>
								<MoneyTransfer />
							</Route>
							<Route exact path='/deposit'>
								<Deposit />
							</Route>
							<Route exact path='/withdraw'>
								<Withdraw />
							</Route>
							<Route exact path='/credit-update'>
								<CreditUpdate />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						MatiBank
						<br />
						All rights reserved
					</Typography.Title>
				</div>
			</div>
		</div>
	);
};

export default App;
