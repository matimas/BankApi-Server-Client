import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import myApi from '../api/Api';

const { Text } = Typography;

const CreateUser = () => {
	const onFinish = async (values: any) => {
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

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			style={{
				height: '84.7vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				paddingLeft: '10vw',
			}}
			name='basic'
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete='off'
		>
			<Form.Item style={{ textAlign: 'center', paddingLeft: '12vw' }}>
				<Text style={{ fontSize: '45px' }}>Create Client</Text>
			</Form.Item>
			<Form.Item
				label='name'
				name='name'
				rules={[{ required: true, message: 'Please input a name!' }]}
			>
				<Input style={{ maxWidth: '300px' }} />
			</Form.Item>

			<Form.Item
				label='cash'
				name='cash'
				rules={[{ required: true, message: 'Please input a cash!' }]}
			>
				<Input style={{ maxWidth: '300px' }} />
			</Form.Item>
			<Form.Item
				label='credit'
				name='credit'
				rules={[{ required: true, message: 'Please input a credit!' }]}
			>
				<Input style={{ maxWidth: '300px' }} />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateUser;
