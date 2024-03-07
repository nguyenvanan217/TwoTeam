import React, { useState } from "react";

import Product from "../Categories/Product";
import ProductList from "../Categories/ProductList";
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
                {/* map */}
                {/* <div className={toggleState === 1 ? "active-content" : "content"}>
                    <h2>Tab1</h2>
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    <h2>Tab2</h2>
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    <h2>Tab3</h2>
                </div> */}
                <Product />
            </div>
        </div>

    )
}

export default ProductTabs;