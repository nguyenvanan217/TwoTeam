import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

import Banner1 from '../../assets/banner/banner-1.jpg';
import Banner2 from '../../assets/banner/banner-2.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.css'

const Banner = () => {
    return (
        <main>
            <div className="banner">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide style={{ height: '532px' }} ><img src={Banner1} alt="" /></SwiperSlide>
                    <SwiperSlide style={{ height: '532px' }}><img src={Banner2} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="my-body container-maxWidth">
                <div className="featured-product">
                    <div className="featured-product-title flex items-center justify-center gap-[12px] py-[2rem]">
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                        <h2 className="text-[22px] whitespace-nowrap font-[600]">SẢN PHẨM NỔI BẬT</h2>
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                    </div>
                    <div className="featured-product-content"></div>
                </div>
            </div>
        </main>
    )
}

export default Banner;