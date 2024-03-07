import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { ProductList } from './ProductList'
import ProductItem from './ProductItem'
import Title from '../Title/Title'

function Product() {
    return (
        <>
            <Title title="SẢN PHẨM NỔI BẬT" />
            <div className='sum-product'>
                <div className='products container-maxWidth'>
                    {ProductList.map((product, index) => (
                        <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} />
                    ))}
                </div>
                <button className="more">Xem Thêm <MdKeyboardDoubleArrowRight /></button>
            </div>
        </>
    )
}

export default Product
