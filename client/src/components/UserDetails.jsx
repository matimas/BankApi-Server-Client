import React, { useState, useEffect } from 'react';
import myApi from '../api/Api';
import { Table, Button, Typography, Popconfirm, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const UserDetails = () => {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const fetchClients = async () => {
		setLoading(true);
		try {
			const response = await myApi.get('/users');
			console.log(response);
			setClients(response.data);
		} catch (error) {
			message.error('Failed to fetch users');
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchClients();
	}, []);

	const handleDelete = async (_id) => {
		try {
			await myApi.delete(`/users/${_id}`);
			message.success('User deleted');
			fetchClients();
		} catch (error) {
			message.error('Failed to delete user');
		}
	};

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Cash',
			dataIndex: 'cash',
			key: 'cash',
		},
		{
			title: 'Credit',
			dataIndex: 'credit',
			key: 'credit',
		},
		{
			title: 'Actions',
			key: 'actions',
			render: (_, record) => (
				<Popconfirm title='Delete user?' onConfirm={() => handleDelete(record._id)} okText='Yes' cancelText='No'>
					<Button danger size='small'>Delete</Button>
				</Popconfirm>
			),
		},
	];

	return (
		<div style={{ padding: 24 }}>
			<Title level={3} style={{ marginBottom: 16 }} className='page-title'>Users</Title>
			<Button type='primary' onClick={() => navigate('/create-user')} style={{ marginBottom: 16 }}>Add User</Button>
			<Table
				columns={columns}
				dataSource={clients}
				rowKey='_id'
				loading={loading}
				bordered
				pagination={{ pageSize: 8 }}
			/>
		</div>
	);
};

export default UserDetails;
