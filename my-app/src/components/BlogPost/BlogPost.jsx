import React from "react";

import BannerPost_fixed from '../../assets/banner/banner-post-fixed.jpg'
import './BlogPost.css'


const BlogPost = () => {
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
    )
}

export default BlogPost;