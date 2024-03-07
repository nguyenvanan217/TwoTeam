import React from "react";
// import image
import Banner from '../../components/Banner/Banner';
import BannerBody from '../../components/BannerBody/BannerBody';
import BlogPost from '../../components/BlogPost/BlogPost';
import ReviewUsers from '../../components/ReviewUsers/ReviewUsers';

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Product from '../../components/Product/Product'
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
const Trang_chu = () => {

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container-maxWidth">
        <Title title="SẢN PHẨM NỔI BẬT" />
      </div>
      <Product />
      <div className="container-maxWidth">
        <BannerBody />
        <BlogPost />
        <ReviewUsers />
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default Trang_chu;
