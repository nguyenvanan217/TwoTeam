import React, { useState } from "react";

import Product from "../Categories/Product";
import { db_topBanChay } from "../Categories/db/db_topBanChay";
import { db_moHinhDep } from "../Categories/db/db_moHinhDep";
import { db_tranhCanva } from "../Categories/db/db_tranhCanva";
import { db_vaiDecor } from "../Categories/db/db_vaiDecor";
import { db_setDecal } from "../Categories/db/db_setDecal";
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
                <div className={toggleState === 1 ? "active-content" : "content"}> <Product productList={db_topBanChay} /></div>
                <div className={toggleState === 2 ? "active-content" : "content"}> <Product productList={db_moHinhDep} /></div>
                <div className={toggleState === 3 ? "active-content" : "content"}> <Product productList={db_tranhCanva} /></div>
                <div className={toggleState === 4 ? "active-content" : "content"}> <Product productList={db_vaiDecor} /></div>
                <div className={toggleState === 5 ? "active-content" : "content"}> <Product productList={db_setDecal} /></div>
            </div>

        </div>

    )
}

export default ProductTabs;