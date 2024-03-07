import React from 'react';
import Iframe from 'react-iframe';
import {
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaPinterestP,
    FaYoutube,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

import Logo from '../../assets/logo-anime-png-2-1400x359.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <main className='bg-[var(--background-footer)] py-[30px]'>
                <div className='container-maxWidth flex text-[13.6px] text-white gap-[45px] max-sm:flex-col max-sm:p-2'>
                    <div className='w-[25%] max-sm:w-[100%]'>
                        <div className="logo"><img src={Logo} alt="" className=' w-[75%]' /></div>
                        <p className="mb-[1.3em] cursor-pointer">Hotline: 0896565123</p>
                        <p className="mb-[1.3em] cursor-pointer">Thời gian hoạt động: 8:30 - 21:30 (Tạm thời đóng cửa)</p>
                        <p className="mb-[1.3em] cursor-pointer">Địa chỉ: Tầng 1, Thống Nhất Complex 82 Nguyễn Tuân, Thanh Xuân, Hà Nội.</p>
                        <h3 className="pt-[1rem] text-[17px] font-[600]">Kết nối với Anime Store:</h3>
                        <div className='flex gap-[3px] pt-[0.5rem]'>
                            <span className='w-[33px] h-[33px] rounded-[50%] bg-[#3a589d] flex items-center justify-center text-[15px] hover:bg-[#446084] cursor-pointer transition-all duration-300 ease-in-out'><FaFacebookF /></span>
                            <span className='w-[33px] h-[33px] rounded-[50%] bg-[#3b6994] flex items-center justify-center text-[15px] hover:bg-[#446084] cursor-pointer transition-all duration-300 ease-in-out'><FaInstagram /></span>
                            <span className='w-[33px] h-[33px] rounded-[50%] bg-[#111111] flex items-center justify-center text-[15px] hover:bg-[#111111] cursor-pointer transition-all duration-300 ease-in-out'><FaTiktok /></span>
                            <span className='w-[33px] h-[33px] rounded-[50%] bg-[#cb2320] flex items-center justify-center text-[15px] hover:bg-[#970000] cursor-pointer transition-all duration-300 ease-in-out'><FaPinterestP /></span>
                            <span className='w-[33px] h-[33px] rounded-[50%] bg-[#c33223] flex items-center justify-center text-[15px] hover:bg-[#970000] cursor-pointer transition-all duration-300 ease-in-out'><FaYoutube /></span>
                        </div>

                    </div>

                    <div className='w-[25%] max-sm:w-[100%]'>
                        <h3 className='pt-[1rem] text-[17px] font-[600] mb-[0.6em]'>Cửa Hàng Anime Store</h3>
                        <ul>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Giới thiệu</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Tuyển dụng</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Liên hệ</span></li>
                        </ul>
                        <h3 className='pt-[1rem] text-[17px] font-[600] mb-[0.6em]'>Gửi e-mail cho chúng tôi</h3>
                        <div className="search flex items-center">
                            <input type="text" placeholder="Email address" className='px-4 p-[0.4rem]' />
                            <button className='bg-[#970000] px-4 py-1 text-[17px] font-[600]'>Gửi</button>
                        </div>
                    </div>

                    <div className='w-[25%] max-sm:w-[100%]'>
                        <h3 className='pt-[1rem] text-[17px] font-[600] mb-[0.6em]'>Hỗ trợ khách hàng:</h3>
                        <ul>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Hướng dẫn mua hàng online</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Chính sách bảo hành</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Chính sách đổi trả</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Chính sách vận chuyển</span></li>
                            <li className='flex items-center footer_menu-shadow gap-[10px] py-[0.6rem]'><MdNavigateNext className='text-[17px]' /><span className='cursor-pointer'>Chính sách bảo mật</span></li>
                        </ul>
                    </div>

                    <div className='w-[25%] max-md:hidden max-sm:hidden '>
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7534088056423!2d107.62642087491243!3d16.43734548429674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a186960ebc1f%3A0x4957e32358b9f2d3!2zMzgzIE5ndXnhu4VuIFThuqV0IFRow6BuaCwgVGjhu6d5IETGsMahbmcsIEjGsMahbmcgVGjhu6d5LCBUaOG7q2EgVGhpw6puIEh14bq_LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1709646454474!5m2!1svi!2s"
                            width="auto"
                            height="280"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </main>
            <div className='bg-[#1b2a3c] text-white flex items-center justify-center text-[12px] p-1'>© Bản quyền thuộc về TwoTeam | Cung cấp bởi A-T</div>
        </footer>
    );
};

export default Footer;
