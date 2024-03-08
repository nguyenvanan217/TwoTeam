import React from 'react'
import './Mohinhleft.css'
function ItemLeftProduct({ avatar, title, discount, price }) {
    return (
        <>
            <div className='items-products'>
                <div className="avatar-image">
                    <img src={avatar} alt="" />
                </div>
                <div className="infor-product">
                    <strong>{title}</strong>
                    <div className='product-content'>
                    <del className={`discn ${discount == '' ? "hidden" : ""}`}>{discount}<sup>đ</sup></del>
                        <span className='price'>{price}<sup>đ</sup></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemLeftProduct
