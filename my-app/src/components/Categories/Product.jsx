import React from 'react'
import ProductItem from './ProductItem'

function Product({ productList, categories, quantity = productList.length, orderBy }) {
    const slideCategories = productList.filter(product => product.categories === categories)
    let sortedProductList;

    switch (orderBy) {
        case 'thap-den-cao':
            sortedProductList = [...slideCategories].sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/\./g, ''));
                const priceB = parseFloat(b.price.replace(/\./g, ''));
                return priceA - priceB;
            });
            break;
        case 'cao-den-thap':
            sortedProductList = [...slideCategories].sort((a, b) => {
                const priceA = parseFloat(a.price.replace(/\./g, ''));
                const priceB = parseFloat(b.price.replace(/\./g, ''));
                return priceB - priceA;
            });
            break;

        default:
            sortedProductList = [...slideCategories];
            break;
    }
    const slicedProductList = sortedProductList.slice(0, quantity)

    return (
        <>
            <div className='sum-product'>
                <div className='products container-maxWidth'>
                    {slicedProductList.map((product, index) => (
                        <ProductItem key={index} avatar={product.avatar} title={product.title} discount={product.discount} price={product.price} categories={product.categories} id={product.id} />
                    ))}
                </div>
                {/* <button className="more">Đi đến cửa hàng <MdKeyboardDoubleArrowRight /></button> */}
            </div>
        </>
    )
}

export default Product
