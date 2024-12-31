import React from 'react';
import './Product.css';

export interface ProductProps {
    id: string;
    name: string;
    imgLogo: string;
    imgs: string[];
    description: string;
    price: number;
    tags: string[];
}

const Product: React.FC<ProductProps> = ({ name, imgLogo, imgs, description, price, tags }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">{name}</h1>
            </div>
            <div className="card-body">
                <img src={imgLogo} alt={name} className="card-img-top main-img" />
                <div className="sub-images">
                    {imgs.map((subImg, index) => (
                        <img key={index + subImg} src={subImg} alt={`${name} ${index + 1}`} className="sub-img" />
                    ))}
                </div>
                <p className="card-text">{description}</p>
                <p className="card-text price">${price.toFixed(2)}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index + tag} className="badge badge-primary tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;