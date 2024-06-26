import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function ProductItem({ id, avatar, title, discount, price, categories }) {
    return (
        <div className='product-items'>
            <div className='product-item'>
                <img src={avatar} alt="" />
                <p className='title'>{title}</p>
                <del className={`discn ${discount === '' ? "hidden" : ""}`}>{discount}<sup>đ</sup></del>
                <span className='price'>{price}<sup>đ</sup></span>
                <div className="product-buttons">
                    <Link to={{ pathname: `/chitiet/${id}`}}>
                        <button className="detail-button">Chi tiết</button>
                    </Link>
                    {/* đặt link để chọn id của sp */}
                    <Link to={{ pathname: `/chitiet/${id}`}}>
                        <button className="buy-button">Mua ngay</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
