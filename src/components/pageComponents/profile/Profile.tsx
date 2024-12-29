import React, { useState } from 'react';
import { Modal, Button, Form, Input, message } from 'antd';
import { UserOutlined, LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import axios from 'axios';

export const Profile: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('jwtToken') ? true : false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleLogin = async () => {
        try {
            const auth = 'Basic ' + btoa(`${username}:${password}`);
            axios.defaults.headers.common['Authorization'] = auth;
            const response = await axios.get('/vapi/basic/api/generate-token');
            sessionStorage.setItem('jwtToken', response.data.accessToken);
            sessionStorage.setItem('refreshToken', response.data.refreshToken);
            setIsLoggedIn(true);
            message.success('Login successful');
            setIsModalVisible(false);
        } catch (error) {
            message.error('Login failed');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('jwtToken');
        setIsLoggedIn(false);
        message.success('Logout successful');
    };

    return (
        <div className='float-end'>
            <UserOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
            {isLoggedIn ? (
                <Button icon={<LogoutOutlined />} onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button icon={<LoginOutlined />} onClick={showModal}>
                    Login
                </Button>
            )}
            <Modal
                title="Login"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    layout="vertical"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            value={username}
                            onChange={(e: any) => setUsername(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                        <Button
                            style={{ marginLeft: '10px' }}
                            onClick={() => {
                                setUsername('');
                                setPassword('');
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            style={{ marginLeft: '10px' }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;