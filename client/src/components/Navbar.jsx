import React from 'react';
import { Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav-container'>
			<div className='logo-container'>
				<Typography.Title level={2} className='logo'>
					<Link to='/user-details'>MatiBank</Link>
				</Typography.Title>
			</div>
			<Menu theme='dark' className='menu-container'>
				<Menu.Item key='user-details'>
					<Link to='/user-details'>Users</Link>
				</Menu.Item>
				<Menu.Item key='create-user'>
					<Link to='/create-user'>Create-User</Link>
				</Menu.Item>
				<Menu.Item key='money-transfer'>
					<Link to='/money-transfer'>Money-Transfer</Link>
				</Menu.Item>
				<Menu.Item key='deposit'>
					<Link to='/deposit'>Deposit</Link>
				</Menu.Item>
				<Menu.Item key='withdraw'>
					<Link to='/withdraw'>Withdraw</Link>
				</Menu.Item>
				<Menu.Item key='credit-update'>
					<Link to='/credit-update'>Credit-Update</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
