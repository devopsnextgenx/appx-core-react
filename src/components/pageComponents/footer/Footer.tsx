import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Assuming you will create a CSS file for styling
import { Icon } from '../../library/icon/Icon';
import { Container, Row, Col } from 'react-bootstrap';

export interface FooterProps {
    companyIconOptions: {
        src: string;
        options: {
            sizeOption: 'small' | 'medium' | 'large';
        };
    };
    links: { name: string; url: string }[];
};

export const Footer: React.FC<FooterProps> = ({ companyIconOptions, links }) => {
    return (
        <footer className="footer bg-light py-3">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <Icon src={companyIconOptions.src} options={companyIconOptions.options} />
                    </Col>
                    <Col className="text-center">
                        <ul className="list-inline m-0">
                            {links.map((link, index) => (
                                <li key={index} className="list-inline-item">
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col className="text-right">
                        <p className="m-0">&copy; {new Date().getFullYear()} Your Company</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;