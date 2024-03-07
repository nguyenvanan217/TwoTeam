import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// import { ProductList } from './ProductList'
import ProductItem from './ProductItem'

function Product({ productList }) {
    return (
        <>
            <div className='sum-product'>
                <div className='products container-maxWidth'>
                    {productList.map((product, index) => (
                        <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} />
                    ))}
                </div>
                {/* <button className="more">Đi đến cửa hàng <MdKeyboardDoubleArrowRight /></button> */}
            </div>
        </>
    )
}

export default Product