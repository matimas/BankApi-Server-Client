import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import myApi from '../api/Api';

const { Text } = Typography;

const CreateUser = () => {
	const onFinish = async (values) => {
		console.log('Success:', values);
		const sendData = {
			name: values.name,
			cash: +values.cash,
			credit: +values.credit,
			isActive: false,
		};
		await myApi
			.post('/users/create', sendData)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error.response.data);
			});
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
				<Text style={{ fontSize: '2.2rem', fontWeight: 700 }}>Create Client</Text>
			</Form.Item>
			<Form.Item
				label='Name'
				name='name'
				rules={[{ required: true, message: 'Please input a name!' }]}
				style={{ width: '100%' }}
			>
				<Input style={{ maxWidth: '100%' }} />
			</Form.Item>
			<Form.Item
				label='Cash'
				name='cash'
				rules={[{ required: true, message: 'Please input a cash!' }]}
				style={{ width: '100%' }}
			>
				<Input style={{ maxWidth: '100%' }} />
			</Form.Item>
			<Form.Item
				label='Credit'
				name='credit'
				rules={[{ required: true, message: 'Please input a credit!' }]}
				style={{ width: '100%' }}
			>
				<Input style={{ maxWidth: '100%' }} />
			</Form.Item>
			<Form.Item style={{ width: '100%' }}>
				<Button type='primary' htmlType='submit' block size='large'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateUser;
