import React, { useState } from "react";

import Product from "../Categories/Product";
import { db_product } from "../Categories/db/db_product";
import { TabItems } from './TabItems'
import './ProductTabs.css'

const ProductTabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <div className="container_tabs bg-white">
            <div className="my_tabs flex gap-[1.4px] justify-center">
                {TabItems.map((item, index) => {
                    return (
                        <div className={toggleState === index + 1 ? "active-tabs" : "tabs"} onClick={() => toggleTab(index + 1)}>{item.name_categories}</div>
                    )
                })}

            </div>
            <div className="content-tabs p-7">
                <div className={toggleState === 1 ? "active-content" : "content"}> <Product productList={db_product} categories={"top-ban-chay"} quantity={8} /></div>
                <div className={toggleState === 2 ? "active-content" : "content"}> <Product productList={db_product} categories={"mo-hinh-dep"} quantity={8} /></div>
                <div className={toggleState === 3 ? "active-content" : "content"}> <Product productList={db_product} categories={"tranh-canva"} quantity={8} /></div>
                <div className={toggleState === 4 ? "active-content" : "content"}> <Product productList={db_product} categories={"vai-decor"} quantity={8} /></div>
                <div className={toggleState === 5 ? "active-content" : "content"}> <Product productList={db_product} categories={"set-decal"} quantity={8} /></div>
            </div>

        </div>

    )
}

export default ProductTabs;