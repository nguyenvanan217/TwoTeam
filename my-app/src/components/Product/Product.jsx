import React from 'react'
import { ProductList } from './ProductList'
import ProductItem from './ProductItem'
import Title from '../Title/Title'

function Product() {
    return (
        <>
            <Title title="SẢN PHẨM NỔI BẬT" />
            <div className='products container-maxWidth'>
                {ProductList.map((product, index) => (
                    <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} />
                ))}
            </div>
        </>
    )
}

export default Product
