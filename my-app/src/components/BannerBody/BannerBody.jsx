import React from "react";

import BannerBody_1 from '../../assets/banner/banner-body-1.jpg'
import BannerBody_2 from '../../assets/banner/banner-body-2.jpg'
import BannerBody_3 from '../../assets/banner/banner-body-3.jpg'

const BannerBody = () => {
    return (
        <div className="banner-body flex gap-[20px] bg-white py-[2rem]">
            <img src={BannerBody_1} alt="" className="object-cover w-[764px] h-[550px] max-md:hidden" />
            <div className="flex flex-col gap-[20px] max-md:flex-row max-sm:flex-auto">
                <img src={BannerBody_2} className="w-[540px] h-[265px] object-cover max-md:w-[100%]" alt="" />
                <img src={BannerBody_3} className="w-[540px] h-[265px] object-cover max-sm:hidden" alt="" />
            </div>
        </div>
    )
}

export default BannerBody;