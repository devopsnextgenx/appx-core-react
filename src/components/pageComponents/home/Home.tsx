import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome</h1>
            <p>This is a simple React application that uses TypeScript and React Router.</p>
            <p>Click on the links above to navigate to different pages.</p>
            <nav>
                <ul>
                    <li><a href="/users">Users</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;