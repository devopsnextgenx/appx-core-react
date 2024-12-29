import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Assuming you will create a CSS file for styling
import { Profile } from '../profile/Profile';
import { Icon } from '../../library/icon/Icon';
import { Container, Row, Col } from 'react-bootstrap';

export interface HeaderProps {
    title: string;
    companyIconOptions: {
        src: string;
        options: {
            sizeOption: 'small' | 'medium' | 'large';
        };
    };
    profileIconOptions: {
        src: string;
        options: {
            sizeOption: 'small' | 'medium' | 'large';
        };
    };
};


export const Header: React.FC<HeaderProps> = ({ title, companyIconOptions, profileIconOptions }) => {
    return (
        <header className="header bg-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="fload-left">
                            <Icon src={companyIconOptions.src} options={companyIconOptions.options} />
                        </div>
                    </Col>
                    <Col md={8} className="text-center">
                        <h1 className="m-0">{title}</h1>
                    </Col>
                    <Col className="text-right">
                        <Profile />
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;