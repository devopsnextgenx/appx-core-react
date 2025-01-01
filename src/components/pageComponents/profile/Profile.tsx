import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Button, Form, Modal } from 'react-bootstrap';
import { UserOutlined } from '@ant-design/icons';
import './Profile.css';


export const Profile: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userName, setUserName] = useState('');
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
            const auth = 'Basic ' + btoa(`${userName}:${password}`);
            console.log(`${auth}`);
            axios.defaults.headers.common['Authorization'] = auth;
            const response = await axios.get('/user-auth-api/basic/api/generate-token');
            sessionStorage.setItem('jwtToken', response.data.accessToken);
            sessionStorage.setItem('refreshToken', response.data.refreshToken);
            setIsLoggedIn(true);
            // message.success('Login successful');
            setIsModalVisible(false);
        } catch (error) {
            // message.error('Login failed');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('jwtToken');
        setIsLoggedIn(false);
        // message.success('Logout successful');
    };

    return (
        <div className='float-center'>
            <UserOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
            {isLoggedIn ? (
                <Button onClick={handleLogout} >
                    Logout
                </Button>
            ) : (
                <Button className='profile-action' onClick={showModal}>
                    Login
                </Button>
            )}
            <Modal show={isModalVisible} onHide={handleCancel}>
                <Form onSubmit={handleLogin}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <iframe
                                src="/oauth2-api/login"
                                title="SSO Login"
                                width="100%"
                                height="400px"
                                style={{ border: 'none' }}
                            ></iframe>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Form.Group>
                            <Button
                                variant="danger"
                                onClick={() => {
                                    setUserName('');
                                    setPassword('');
                                }}
                                style={{ marginLeft: '10px' }}
                            >
                                Reset
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={handleCancel}
                                style={{ marginLeft: '10px' }}
                            >
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit"
                                style={{ marginLeft: '10px' }}
                            >
                                Login
                            </Button>
                        </Form.Group>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default Profile;