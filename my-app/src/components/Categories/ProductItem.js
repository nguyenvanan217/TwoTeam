import React from 'react'

import './Product.css'
function ProductItem({ avatar, title, discount, price, categories, }) {
    {
            return (
                <>
                    <div className='product-items'>
                        <div className='product-item'>
                            <img src={avatar} alt="" />
                            <p className='title'>{title}</p>
                            <del className={`discn ${discount == '' ? "hidden" : ""}`}>{discount + " VNĐ"}</del>
                            <span className='price'>{price + " VNĐ"}</span>
                            <div className="product-buttons">
                                <button className="detail-button">Chi tiết</button>
                                <button className="buy-button">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                </>
            )
    }

}

export default ProductItem
