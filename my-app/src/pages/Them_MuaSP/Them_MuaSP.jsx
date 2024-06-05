import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { FaFaceGrinHearts } from "react-icons/fa6";
import { RxCaretRight } from "react-icons/rx";
import { useParams } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Footer from '../../components/footer/footer';
import { db_product } from '../../components/Categories/db/db_product';
import './Them_MuaSP.css'
function Them_MuaSP() {
    //lấy đúng sản phẩm qua id đã đặt link
    const { id } = useParams();
    const product = db_product.find(item => item.id === Number(id));
    console.log(id);
    return (
        <div>
            <Navbar />
            <div>
                <div className="pick">
                    <strong> <FaCheck /> Sản phẩm mà bạn chọn đã được thêm vào giỏ hàng. <FaFaceGrinHearts /></strong>
                </div>
                <div className="steps">
                    <ul>
                        <li><span>1</span>Giỏ hàng</li>
                        <span><RxCaretRight /></span>
                        <li className='special'><span>2</span>Thông tin thanh toán</li>
                        <span><RxCaretRight /></span>
                        <li><span>3</span>Hoàn tất đặt hàng</li>
                    </ul>
                </div>
                <div className='container2'>
                    <div className="box-left">
                        <h1><strong>Thông Tin Thanh Toán</strong></h1>
                        <input type="text" placeholder='Nhập đầy đủ họ và tên của bạn' />
                        <input type="text" placeholder='Ví dụ Số xx Ngõ xx Phú Kiều, Bắc Từ Liêm, Hà Nội' />
                        <input type="text" placeholder='Số điện thoại' />
                        <input type="text" placeholder='Địa chỉ email' />
                        <h1><strong>Thông Tin Bổ Sung</strong></h1>
                        <textarea name="" id="" placeholder='Ghi chú đơn hàng,ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn'></textarea>
                    </div>
                    <div className="box-right">
                        <h1><strong>ĐƠN HÀNG CỦA BẠN</strong></h1>
                        <div className="bill-product">
                            <h2><strong>SẢN PHẨM</strong></h2>
                            <h2><strong>TẠM TÍNH</strong></h2>
                        </div>
                        <div className="name-product">
                            <strong>{product && product.title} / Số lượng: <span>...</span></strong>
                            <strong>{product && product.price} <sup>đ</sup></strong>
                        </div>
                        <div className="sum-price">
                            <strong>Tổng</strong>
                            <strong>470.000<sup>đ</sup></strong>
                        </div>
                        <div className="check-product">
                            <div className="check-top">
                                <input type="checkbox" />
                                <p>Thanh toán khi nhận hàng</p>
                            </div>
                        </div>
                        <button>Đặt Hàng</button>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}
export default Them_MuaSP
