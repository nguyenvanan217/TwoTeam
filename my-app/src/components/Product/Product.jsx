import React from 'react'
import { ProductList } from './ProductList'
import ProductItem from './ProductItem'

function Product() {
    return (
        <>
            <div className='products container-maxWidth'>
                {ProductList.map((product, index) => (
                    <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} />
                ))}
            </div>
        </>
    )
}

export default Product
