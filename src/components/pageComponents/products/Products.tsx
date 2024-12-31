import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ProductList, { ProductListProps } from '../../library/productList/ProductList';
import axios from 'axios';
import './Products.css';

const Products: React.FC = () => {
    const [productList, setProductList] = useState<ProductListProps['productList']>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = sessionStorage.getItem('jwtToken');
                const response = await axios.get('/products-api/api/products', {
                    headers: {
                        Authorization: `${token}`
                    }
                });
                setProductList(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container className="products-page" fluid>
            <Row className="justify-content-center my-4">
                <Col md={8} className="text-center">
                    <h2 className="text-primary">Our Products</h2>
                    <p className="text-secondary">Browse through our exclusive collection of products.</p>
                </Col>
            </Row>
            {loading ? (
                <Row className="justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </Row>
            ) : (
                <ProductList productList={productList} />
            )}
        </Container>
    );
};

export default Products;