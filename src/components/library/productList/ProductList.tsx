import React from 'react';
import Product, { ProductProps } from '../product/Product';
import './ProductList.css';

export interface ProductListProps {
    productList: ProductProps[];
}

const ProductList: React.FC<ProductListProps> = ({ productList }) => {
    return (
        <div className="container d-flex flex-wrap">
            {productList.map((product, index) => (
                <div className={`col-12 col-md-6 col-lg-3`} key={index + product.id}>
                    <div className='m-2'>
                        <Product {...product} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;