import React from "react";

import Banner from '../../components/Banner/Banner';
import BannerBody from '../../components/BannerBody/BannerBody';
import BlogPost from '../../components/BlogPost/BlogPost';
import ReviewUsers from '../../components/ReviewUsers/ReviewUsers';

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Product from "../../components/Categories/Product";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import ProductTabs from '../../components/ProductTabs/ProductTabs'

import { db_product } from "../../components/Categories/db/db_product";

const Trang_chu = () => {

    return (
        <main>
            <Navbar />
            <Banner />
            <div className="my-body bg-white">
                <div className="container-maxWidth">
                    <Title title="SẢN PHẨM NỔI BẬT" />
                    <Product productList={db_product} categories={"san-pham-noi-bat"} quantity={4} />
                    <BannerBody />
                    <ProductTabs />
                    <BlogPost />
                    <ReviewUsers />
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </main >
    )
}

export default Trang_chu;