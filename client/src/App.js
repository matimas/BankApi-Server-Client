import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
	LoginRegister,
} from './components';

const { Title } = Typography;


const App = () => {
	const location = useLocation();
	const hideNavbar = location.pathname === '/login' || location.pathname === '/';
	return (
		<div className='app'>
			{/* סרגל ניווט */}
			{!hideNavbar && (
				<div className='navbar'>
					<Navbar />
				</div>
			)}
			<div className='main'>
				<Layout>
					<div className='routes'>
						{/* ניהול הראוטים */}
						<Routes>
							<Route path='/login' element={<LoginRegister />} />
							<Route path='/user-details' element={<UserDetails />} />
							<Route path='/create-user' element={<CreateUser />} />
							<Route path='/money-transfer' element={<MoneyTransfer />} />
							<Route path='/deposit' element={<Deposit />} />
							<Route path='/withdraw' element={<Withdraw />} />
							<Route path='/credit-update' element={<CreditUpdate />} />
							<Route path='/' element={<LoginRegister />} />
						</Routes>
					</div>
				</Layout>
				{/* פוטר */}
				<div className='footer'>
					<Title level={5} style={{ color: 'white', textAlign: 'center' }}>
						MatiBank
						<br />
						All rights reserved
					</Title>
				</div>
			</div>
		</div>
	);
};

export default App;
