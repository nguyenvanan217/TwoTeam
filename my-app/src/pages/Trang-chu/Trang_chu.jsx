import React from "react";
// import image


import Banner from '../../components/Banner/Banner';
import BannerBody from '../../components/BannerBody/BannerBody';
import BlogPost from '../../components/BlogPost/BlogPost';
import ReviewUsers from '../../components/ReviewUsers/ReviewUsers';
import Product from '../../components/Product/Product'
import './Trang_chu.css'

const Trang_chu = () => {

    return (
        <main>
            <Banner />
            <div className="my-body container-maxWidth">
                <Product />
                <BannerBody />
                {/* <BlogPost /> */}
                <ReviewUsers />
            </div>
        </main >
    )
}

export default Trang_chu;