import React from "react";

// import image
import BannerBody_1 from '../../assets/banner/banner-body-1.jpg'
import BannerBody_2 from '../../assets/banner/banner-body-2.jpg'
import BannerBody_3 from '../../assets/banner/banner-body-3.jpg'
import BannerPost_fixed from '../../assets/banner/banner-post-fixed.jpg'
import Review1 from '../../assets/review-user/NPA_4218.jpg'
import Review2 from '../../assets/review-user/Toan-ca.jpg'
import Review3 from '../../assets/review-user/NPA_3783.jpg'

import Banner from '../../components/Banner/Banner';
import './Trang_chu.css'

const Trang_chu = () => {
    const backgroundStyle = {
        backgroundImage: `url(${BannerPost_fixed})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        top: '0',
    };

    return (
        <main>
            <Banner />
            <div className="my-body container-maxWidth">
                <div className="featured-product bg-white">
                    <div className="featured-product-title flex items-center justify-center gap-[12px] py-[2rem]">
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                        <h2 className="text-[22px] whitespace-nowrap font-[600]">SẢN PHẨM NỔI BẬT</h2>
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                    </div>
                    <div className="featured-product-content">them san pham vao day</div>
                </div>

                <div className="banner-body flex gap-[20px] bg-white py-[2rem]">
                    <img src={BannerBody_1} alt="" className="object-cover w-[764px] h-[550px] max-md:hidden" />
                    <div className="flex flex-col gap-[20px] max-md:flex-row max-sm:flex-auto">
                        <img src={BannerBody_2} className="w-[540px] h-[265px] object-cover max-md:w-[100%]" alt="" />
                        <img src={BannerBody_3} className="w-[540px] h-[265px] object-cover max-sm:hidden" alt="" />
                    </div>
                </div>

                <div className="tabs_product bg-white py-[2rem]">them tabs product vao day</div>

                <div className="blog_post w-[100%]" style={{ position: 'relative' }}>
                    <div className="background-fixed container-maxWidth" style={backgroundStyle}></div>
                    <div className="h-[220px]"></div>
                    <div className="bg-white">
                        <div className="blog_post-title text-[20px] font-[500] text-[#a60202] pt-[2rem]">BÀI VIẾT MỚI</div>
                        <div className="blog_post-content grid grid-cols-4 gap-[30px] py-[0.5rem] max-sm:grid-cols-2">
                            <div className="blog_post-content-item shadow-md object-cover pb-[1.5rem]">
                                <img src="https://animestore.vn/wp-content/uploads/2024/02/media_gallery-2020-01-2-6-1_7d354e60e5dfb9acf2aa667870f99e51-300x300.jpg" alt="maxresdefault" className="object-cover w-[100%] h-[173px]" />
                                <div className="pl-2">
                                    <span className="text-[14px] font-[550]">Top 10+ Game Khủng Long Hay & Nổi Tiếng Nhất Hiện Nay</span>
                                    <p className="text-[11px] relative post_time">29/02/2024</p>
                                </div>
                            </div>
                            <div className="blog_post-content-item shadow-md object-cover pb-[1.5rem]">
                                <img src="https://animestore.vn/wp-content/uploads/2024/02/media_gallery-2020-01-2-6-1_7d354e60e5dfb9acf2aa667870f99e51-300x300.jpg" alt="maxresdefault" className="object-cover w-[100%] h-[173px]" />
                                <div className="pl-2">
                                    <span className="text-[14px] font-[550]">Top 10+ Game Khủng Long Hay & Nổi Tiếng Nhất Hiện Nay</span>
                                    <p className="text-[11px] relative post_time">29/02/2024</p>
                                </div>
                            </div>
                            <div className="blog_post-content-item shadow-md object-cover pb-[1.5rem]">
                                <img src="https://animestore.vn/wp-content/uploads/2024/02/media_gallery-2020-01-2-6-1_7d354e60e5dfb9acf2aa667870f99e51-300x300.jpg" alt="maxresdefault" className="object-cover w-[100%] h-[173px]" />
                                <div className="pl-2">
                                    <span className="text-[14px] font-[550]">Top 10+ Game Khủng Long Hay & Nổi Tiếng Nhất Hiện Nay</span>
                                    <p className="text-[11px] relative post_time">29/02/2024</p>
                                </div>
                            </div>
                            <div className="blog_post-content-item shadow-md object-cover pb-[1.5rem]">
                                <img src="https://animestore.vn/wp-content/uploads/2024/02/media_gallery-2020-01-2-6-1_7d354e60e5dfb9acf2aa667870f99e51-300x300.jpg" alt="maxresdefault" className="object-cover w-[100%] h-[173px]" />
                                <div className="pl-2">
                                    <span className="text-[14px] font-[550]">Top 10+ Game Khủng Long Hay & Nổi Tiếng Nhất Hiện Nay</span>
                                    <p className="text-[11px] relative post_time">29/02/2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="flex items-center justify-center gap-[12px] py-[2rem] pt-[3rem]">
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                        <h2 className="text-[22px] whitespace-nowrap font-[600]">NHẬT XÉT CỦA KHÁCH HÀNG</h2>
                        <b className="w-[100%] h-[1.6px] bg-[#970000]"></b>
                    </div>
                    <div className="flex gap-[30px] py-[1rem] pb-[2rem] max-sm:flex-col">
                        <div className="flex flex-col items-center justify-center shadow-custom-color px-3 py-2">
                            <img src={Review1} alt="" className="rounded-[50%] w-[80px] h-[80px]" />
                            <span className="text-[19px] font-[550] py-[0.6rem]">Đàm Văn Quang</span>
                            <p className="text-center text-[14px] italic">Các bạn có phong cách trẻ trung, năng động và có ý thức cầu tiến rất cao, chính vì vậy tôi hoàn toàn yên tâm khi mua các sản phẩm tại Anime Store.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center shadow-custom-color px-3 py-2">
                            <img src={Review2} alt="" className="rounded-[50%] w-[80px] h-[80px]" />
                            <span className="text-[19px] font-[550] py-[0.6rem]">Hoàng Toản</span>
                            <p className="text-center text-[14px] italic">Tôi không biết phải nói gì hơn ngoài 2 từ “TUYỆT VỜI” dành cho tập thể Anime Store. Sản phậm hơn sự mong đợi. Luôn ủng hộ !</p>
                        </div>
                        <div className="flex flex-col items-center justify-center shadow-custom-color px-3 py-2">
                            <img src={Review3} alt="" className="rounded-[50%] w-[80px] h-[80px]" />
                            <span className="text-[19px] font-[550] py-[0.6rem]">Thảoo Đỗ</span>
                            <p className="text-center text-[14px] italic">Các mẫu thiết kế rất độc đáo và ấn tượng. Dịch vụ chăm sóc khách hàng tuyệt vời, tận tâm. Mình sẽ còn hợp tác lâu dài cùng Anime Store. </p>
                        </div>
                    </div>
                </div>

            </div>
        </main >
    )
}

export default Trang_chu;