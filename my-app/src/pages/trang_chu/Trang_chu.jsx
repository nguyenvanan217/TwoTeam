import React from "react";

// import image
import BannerBody_1 from '../../assets/banner/banner-body-1.jpg'
import BannerBody_2 from '../../assets/banner/banner-body-2.jpg'
import BannerBody_3 from '../../assets/banner/banner-body-3.jpg'

import Banner from '../../components/Banner/Banner';

const Trang_chu = () => {
    return (
        <main>
            <Banner />
            <div className="my-body container-maxWidth">
                <div className="featured-product">
                    <div className="featured-product-title flex items-center justify-center gap-[12px] py-[2rem]">
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                        <h2 className="text-[22px] whitespace-nowrap font-[600]">SẢN PHẨM NỔI BẬT</h2>
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                    </div>
                    <div className="featured-product-content">...</div>
                </div>

                <div className="banner-body flex gap-[20px]">
                    <img src={BannerBody_1} alt="" className="object-cover w-[764px] h-[550px] max-md:hidden" />
                    <div className="flex flex-col gap-[20px] max-md:flex-row max-sm:flex-auto">
                        <img src={BannerBody_2} className="w-[540px] h-[265px] object-cover max-md:w-[100%]" alt="" />
                        <img src={BannerBody_3} className="w-[540px] h-[265px] object-cover max-sm:hidden" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Trang_chu;