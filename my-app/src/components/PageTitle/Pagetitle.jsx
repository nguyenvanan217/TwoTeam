import React from 'react';
import './Pagetitle.css';

function Pagetitle({ pagetitle }) {
    return (
        <div className='title-page'>
            <div className="title-page-left">
                <p>Trang Chủ</p>
                <span className="divider">/</span>
                <p>Sản Phẩm</p>
                <span className="divider">/</span>
                <h3><strong>{pagetitle}</strong></h3>
            </div>
            <div className="title-page-right">
                <select  className="custom-select" name="" id="">
                    <option value="">Thứ Tự Theo Mức Độ Phổ Biến</option>
                    <option value="">Mới Nhất</option>
                    <option value="">Giá từ thấp đến cao</option>
                    <option value="">Giá từ cao về thấp cao</option>
                </select>
            </div>
        </div>
    );
}

export default Pagetitle;
