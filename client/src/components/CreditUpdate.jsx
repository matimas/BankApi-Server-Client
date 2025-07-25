import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import myApi from '../api/Api';

const { Text } = Typography;
const CreditUpdate = () => {
	const onFinish = async (values) => {
		try {
			const sendData = {
				id: values.id,
				amount: +values.amount,
			};
			const res = await myApi.put('/users/deposit', sendData);
			console.log(res);
		} catch (error) {
			console.log(error.message);
		}
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			style={{
				minHeight: '70vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#fff',
				borderRadius: 12,
				boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
				padding: 32,
				maxWidth: 400,
				margin: '40px auto',
			}}
			name='basic'
			labelCol={{ span: 24 }}
			wrapperCol={{ span: 24 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item style={{ textAlign: 'center', width: '100%' }}>
				<Text style={{ fontSize: '2.2rem', fontWeight: 700 }}>Credit Update</Text>
			</Form.Item>
			<Form.Item
				label='ID'
				name='id'
				rules={[{ required: true, message: 'Please input an id!' }]}
				style={{ width: '100%' }}
			>
				<Input style={{ maxWidth: '100%' }} />
			</Form.Item>
			<Form.Item
				label='Amount'
				name='amount'
				rules={[{ required: true, message: 'Please input the amount!' }]}
				style={{ width: '100%' }}
			>
				<Input style={{ maxWidth: '100%' }} />
			</Form.Item>
			<Form.Item style={{ width: '100%' }}>
				<Button type='primary' htmlType='submit' block size='large'>
					Update
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreditUpdate;
