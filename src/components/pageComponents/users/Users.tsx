import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

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
    }, []);

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
                            <td>{user.roles.map(role=> <li>{role}</li>)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Users;