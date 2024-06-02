import React from 'react'
import banner from '../../assets/bannerlh.jpg'
import leftlh from '../../assets/leftlh.jpg'
import lh1 from '../../assets/lh1.png'
import lh2 from '../../assets/lh2.png'
import Navbar from '../../components/header/Navbar'
import Footer from '../../components/footer/footer'
import './Lienhe.css'
function Lienhe() {
    return (
        <>
            <Navbar />
            <div className="container1">
                <div className="cotainer-banner">
                    <img src={banner} alt="" />
                </div>
                <div className="main-contents">
                    <div className="contents-left-top">
                        <img src={leftlh} alt="" />
                    </div>
                    <div className="contents-right-top">
                        <strong className='name'>Họ Tên:</strong>
                        <input type="text" />
                        <strong>Email:</strong>
                        <input type="text" />
                        <strong>Số Điện Thoại:</strong>
                        <input type="text" />
                        <strong>Tiêu Đề:</strong>
                        <input type="text" />
                        <strong>Nội Dung:</strong>
                        <textarea name="" id=""></textarea>
                        <div className="check">
                            <input type="checkbox" />
                            <strong className='noidung'>Lưu tên, email và trang web của tôi trong trình duyệt này </strong>
                            <button className='finish'>Hoàn Tất</button>
                        </div>
                    </div>
                </div>
                <div className="contents-btt">
                    <div className="contents-left-btt">
                        <img src={lh1} alt="" />
                        <p><strong>Trò chuyện với nhân viên bán hàng</strong></p>
                        <button className='num'>0896565123</button>
                    </div>
                    <div className="contents-right-btt">
                        <img src={lh2} alt="" />
                        <p><strong>Đôi khi bạn cần một chút giúp đỡ. Đừng lo lắng, chúng tôi ở đây vì bạn.</strong></p>
                        <button className='contact'>LIÊN HỆ HỖ TRỢ</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Lienhe
