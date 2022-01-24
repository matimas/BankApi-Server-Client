import React, { useState, useEffect } from 'react';
import myApi from '../api/Api';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const UserDetails = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const importdData = async () => {
			try {
				const { data } = await myApi.get('/users');
				console.log(data);
				setClients(data);
			} catch (error) {
				console.log(error.message);
			}
		};
		importdData();
	}, []);

	return (
		<>
			<Row gutter={[32, 32]} className='crypto-card-container'>
				{clients.map((client) => (
					<Col xs={24} sm={12} lg={6} className='crypto-card' key={client._id}>
						<Link to={`/client/${client._id}`}>
							<Card title={client._id} hoverable>
								<p>Client Name: {client.name}</p>
								<p>Client Cash: {client.cash}</p>
								<p>Client Credit: {client.credit}</p>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</>
	);
};

export default UserDetails;
