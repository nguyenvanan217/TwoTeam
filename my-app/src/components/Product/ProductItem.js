import React from 'react'
import './Product.css'
function ProductItem({ avatar, title, discount, price }) {
    return (
        <div className='product-items'>
            <div className='product-img'>
                <img src={avatar} alt="" />
                <p>{title}</p>
                <del className='discn'>{discount + " $"}</del>
                <span className='price'>{price + " $"}</span>
                <div className="product-buttons">
                    <button className="detail-button">Chi tiết</button>
                    <button className="buy-button">Mua ngay</button>
                </div>
            </div>
            {/* <div className="product-title">
                <div className="product-buttons">
                    <button className="detail-button">Chi tiết</button>
                    <button className="buy-button">Mua ngay</button>
                </div>
            </div> */}
        </div>
    )
}

export default ProductItem
