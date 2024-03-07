import React from "react";

import Review1 from '../../assets/review-user/NPA_4218.jpg'
import Review2 from '../../assets/review-user/Toan-ca.jpg'
import Review3 from '../../assets/review-user/NPA_3783.jpg'
import './ReviewUsers.css'
import { ReviewItems } from "./ReviewItems";
import Title from '../Title/Title'

const ReviewUsers = () => {
    return (
        <div className="bg-white">
            <Title title="NHẬT XÉT CỦA KHÁCH HÀNG" />
            <div className="flex gap-[30px] py-[1rem] pb-[2rem] max-sm:flex-col">
                {ReviewItems.map((item, index) => {
                    return (
                        <div className="flex flex-col items-center justify-center shadow-custom-color px-3 py-2" key={index}>
                            <img src={item.src} alt="" className="rounded-[50%] w-[80px] h-[80px]" />
                            <span className="text-[19px] font-[550] py-[0.6rem]">{item.name}</span>
                            <p className="text-center text-[14px] italic">{item.content}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default ReviewUsers;