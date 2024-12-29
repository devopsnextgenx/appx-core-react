import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';

const Body: React.FC = () => {
    return (
        <div className="container">
            <Row>
                <Col md={1}>dd</Col>
                <Col md={11}>ddd</Col>
            </Row>
            <Outlet />
        </div>
    );
};

export default Body;