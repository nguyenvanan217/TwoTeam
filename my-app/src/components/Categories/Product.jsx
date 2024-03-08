import React from 'react'
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// import { ProductList } from './ProductList'
import ProductItem from './ProductItem'

function Product({ productList, categories, quantity = productList.length }) {
    
    const slideCategories = productList.filter(product => product.categories === categories)
    const slicedProductList = slideCategories.slice(0, quantity)

    return (
        <>
            <div className='sum-product'>
                <div className='products container-maxWidth'>
                    {slicedProductList.map((product, index) => (
                        <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} categories={product.categories} />
                    ))}
                </div>
                {/* <button className="more">Đi đến cửa hàng <MdKeyboardDoubleArrowRight /></button> */}
            </div>
        </>
    )
}

export default Product
