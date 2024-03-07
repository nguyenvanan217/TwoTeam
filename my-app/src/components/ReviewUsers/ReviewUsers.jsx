import React from "react";

import Review1 from '../../assets/review-user/NPA_4218.jpg'
import Review2 from '../../assets/review-user/Toan-ca.jpg'
import Review3 from '../../assets/review-user/NPA_3783.jpg'
import './ReviewUsers.css'

const ReviewUsers = () => {
    return (
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
    )
}

export default ReviewUsers;