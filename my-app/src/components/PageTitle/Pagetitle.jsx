import React from 'react';
import './Pagetitle.css';
import { NavLink } from 'react-router-dom';

function Pagetitle({ pagetitle, onSortChange }) {

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;

        onSortChange(selectedValue);
    };
    // const handleSortChange = (selectedValue) => {
    //     // Xử lý giá trị được truyền từ Pagetitle
    //     setSortValue(selectedValue);
    //     // Thực hiện các xử lý khác tùy thuộc vào yêu cầu của bạn
    //   };

    return (
        <div className="container_title">
            <div className='container_title_2'>
                <div className='title-page container-maxWidth'>
                    <div className="title-page-left">
                        <p><NavLink to="/">Trang Chủ</NavLink></p>
                        <span className="divider">/</span>
                        <p><NavLink to="/">Sản Phẩm</NavLink></p>
                        <span className="divider">/</span>
                        <h3><strong><NavLink to="/">{pagetitle}</NavLink></strong></h3>
                    </div>
                    <div className="title-page-right">
                        <select className="custom-select" name="" id="" onChange={handleSortChange}>
                            <option value="thu-tu-bo-bien">Thứ Tự Theo Mức Độ Phổ Biến</option>
                            <option value="moi-nhat">Mới Nhất</option>
                            <option value="thap-den-cao">Giá từ thấp đến cao</option>
                            <option value="cao-den-thap">Giá từ cao về thấp cao</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagetitle;
