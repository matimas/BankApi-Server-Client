import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import myApi from '../api/Api';

const { Title } = Typography;

const LoginRegister = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // בדוק אם המשתמש קיים
      const res = await myApi.post('/users/login', {
        idNumber: values.idNumber,
        code: values.code,
      });
      if (res.data && res.data.user) {
        message.success('התחברת בהצלחה!');
        if (res.data.user.role === 'admin') {
          navigate('/user-details'); // אדמין רואה הכל
        } else {
          navigate(`/user-details?id=${res.data.user._id}`); // רגיל רואה את עצמו בלבד
        }
      } else {
        message.error('משתמש לא נמצא');
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        message.info('משתמש לא קיים, יש ליצור חשבון חדש');
        navigate('/create-user');
      } else {
        message.error('שגיאה בכניסה');
      }
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
      <Title level={3} style={{ textAlign: 'center' }}>כניסה / הרשמה</Title>
      <Form
        name='login'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='תעודת זהות'
          name='idNumber'
          rules={[{ required: true, message: 'יש להזין תעודת זהות' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='קוד'
          name='code'
          rules={[{ required: true, message: 'יש להזין קוד' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' block loading={loading}>
            כניסה
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type='link' block onClick={() => navigate('/create-user')}>
            אין לך חשבון? פתח חשבון חדש
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginRegister; 