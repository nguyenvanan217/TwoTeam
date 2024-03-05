import React from 'react';
import Iframe from 'react-iframe';

import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className='flex'>
            <div>
                <div className="logo"><img src={Logo} alt="" /></div>
                <p className="">Hotline: 0896565123</p>
                <p>Thời gian hoạt động: 8:30 - 21:30 (Tạm thời đóng cửa)</p>
                <p>Địa chỉ: Tầng 1, Thống Nhất Complex 82 Nguyễn Tuân, Thanh Xuân, Hà Nội.</p>
            </div>

            <div>
                <h3>Kết nối với Anime Store:</h3>
                <ul>
                    <li>Cửa hàng Anime Store</li>
                    <li>Giới thiệu</li>
                    <li>Tuyển dụng</li>
                    <li>Liên hệ</li>
                </ul>
                <h3>Kết nối với Anime Store:</h3>
                <div className="search">
                    <input type="text" placeholder="Email address" />
                    <button>Gửi</button>
                </div>
            </div>

            <div>
                <h3>Hỗ trợ khách hàng:</h3>
                <ul>
                    <li>Hướng dẫn mua hàng online</li>
                    <li>Chính sách bảo hành</li>
                    <li>Chính sách đổi trả</li>
                    <li>Chính sách vận chuyển</li>
                    <li>Chính sách bảo mật</li>
                </ul>
            </div>

            <div>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7534088056423!2d107.62642087491243!3d16.43734548429674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a186960ebc1f%3A0x4957e32358b9f2d3!2zMzgzIE5ndXnhu4VuIFThuqV0IFRow6BuaCwgVGjhu6d5IETGsMahbmcsIEjGsMahbmcgVGjhu6d5LCBUaOG7q2EgVGhpw6puIEh14bq_LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1709646454474!5m2!1svi!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </footer>
    );
};

export default Footer;
