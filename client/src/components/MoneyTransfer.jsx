import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import myApi from '../api/Api';

const { Text } = Typography;
const MoneyTransfer = () => {
	const onFinish = async (values: any) => {
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
				<Text style={{ fontSize: '45px' }}>Money Transfer</Text>
			</Form.Item>
			<Form.Item
				label='id'
				name='from'
				rules={[{ required: true, message: 'Please input a id!' }]}
			>
				<Input style={{ maxWidth: '300px' }} placeholder='from' />
			</Form.Item>
			<Form.Item
				label='id'
				name='to'
				rules={[{ required: true, message: 'Please input a id!' }]}
			>
				<Input style={{ maxWidth: '300px' }} placeholder='to' />
			</Form.Item>

			<Form.Item
				label='amount'
				name='amount'
				rules={[{ required: true, message: 'Please input the amount!' }]}
			>
				<Input style={{ maxWidth: '300px' }} />
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button type='primary' htmlType='submit'>
					Action
				</Button>
			</Form.Item>
		</Form>
	);
};

export default MoneyTransfer;
