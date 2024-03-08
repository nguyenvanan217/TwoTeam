import React from 'react'

function Mohinhrightitem({ avatar, title, discount, price }) {
    return (
        <div>
            <div className='product-items'>
                <div className='product-item'>
                    <img src={avatar} alt="" />
                    <p>{title}</p>
                    <del className='discn'>{discount + " VNĐ"}</del>
                    <span className='price'>{price + " VNĐ"}</span>
                    <div className="product-buttons">
                        <button className="detail-button">Chi tiết</button>
                        <button className="buy-button">Mua ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mohinhrightitem
