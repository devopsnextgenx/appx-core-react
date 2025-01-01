import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Button, Container, Form, Table } from 'react-bootstrap';
import './Users.css';

const roleOptions = [
    { value: 'SYSTEM_ADMINISTRATOR', label: 'System Administrator' },
    { value: 'ORGANIZATION_ADMINISTRATOR', label: 'Organization Administrator' },
    { value: 'DATA_MANAGER', label: 'Data Manager' },
    { value: 'COMPANY_ADMINISTRATOR', label: 'Company Administrator' },
    { value: 'SERVICE_ACCOUNT', label: 'Service Account' },
];

interface User {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    roles: string[];
}


const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
    const [registerUser, setRegisterUser] = useState({ active: true } as User);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = sessionStorage.getItem('jwtToken');
                const response = await axios.get('/user-auth-api/api/users', {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [users]);

    return (
        <div>
            <h2>User List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.userName}>
                            <td>{user.userName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.active ? 'Yes' : 'No'}</td>
                            <td>{user.roles.map(role => <li>{role}</li>)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Container className='register-user'>
                <Form onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    try {
                        const jwtToken = sessionStorage.getItem('jwtToken');
                        if (jwtToken) {
                            axios.defaults.headers.common['Authorization'] = `${jwtToken}`;
                        }
                        await axios.post('/user-auth-api/api/users', registerUser);
                        setIsRegisterModalVisible(false);
                        users.push(registerUser);
                    } catch (error) {
                        // message.error('Registration failed');
                    }
                }}>
                    <Form.Group controlId="formRegisterUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            value={registerUser.userName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setRegisterUser({ ...registerUser, userName: e.target.value })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formRegisterFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={registerUser.firstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setRegisterUser({ ...registerUser, firstName: e.target.value })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formRegisterLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={registerUser.lastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setRegisterUser({ ...registerUser, lastName: e.target.value })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formRegisterEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            value={registerUser.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setRegisterUser({ ...registerUser, email: e.target.value })
                            }
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formRegisterRoles">
                        <Form.Label>Roles</Form.Label>
                        <Select
                            isMulti
                            options={roleOptions}
                            value={roleOptions.filter(option => registerUser.roles?.includes(option.value))}
                            onChange={(selectedOptions) =>
                                setRegisterUser({
                                    ...registerUser,
                                    roles: selectedOptions ? selectedOptions.map(option => option.value) : []
                                })
                            }
                        />
                    </Form.Group>
                    
                    <div>
                        <Button className="register pull-right" variant="secondary" onClick={() => setIsRegisterModalVisible(false)}>
                            Cancel
                        </Button>
                        <Button className="register pull-right" variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Users;