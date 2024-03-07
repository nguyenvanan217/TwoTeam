import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Banner1 from '../../assets/banner/banner-1.jpg';
import Banner2 from '../../assets/banner/banner-2.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Swiper
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ height: "532px" }}><img src={Banner1} alt="" /></SwiperSlide>
                <SwiperSlide style={{ height: "532px" }}><img src={Banner2} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;