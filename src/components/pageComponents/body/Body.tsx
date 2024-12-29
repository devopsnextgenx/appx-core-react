import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';

const Body: React.FC = () => {
    return (
        <div className="container">
            <Row>
                <Col></Col>
                <Col></Col>
            </Row>
            <Outlet />
        </div>
    );
};

export default Body;