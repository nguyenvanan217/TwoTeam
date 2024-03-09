import React from 'react';
import './Pagetitle.css';
import { NavLink } from 'react-router-dom';

function Pagetitle({ pagetitle, onSortChange, isDropdown }) {
    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        onSortChange(selectedValue);
    };

    const renderSortOptions = () => {
        if (isDropdown) {
            return (
                <select className="custom-select" name="" id="" onChange={handleSortChange}>
                    <option value="thu-tu-bo-bien">Thứ Tự Theo Mức Độ Phổ Biến</option>
                    <option value="thap-den-cao">Giá từ thấp đến cao</option>
                    <option value="cao-den-thap">Giá từ cao về thấp</option>
                </select>
            );
        } else {
            return (
                <button class="btn-23">
                    <span class="text"></span>
                    <span aria-hidden="" class="marquee">Trang Web Được Sáng Tạo Bởi TwoTeam</span>
                </button>

            );
        }
    };
    return (
        <div className="container_title">
            <div className='container_title_2'>
                <div className='title-page container-maxWidth'>
                    <div className="title-page-left">
                        <p><NavLink to="/">Trang Chủ</NavLink></p>
                        <span className="divider">/</span>
                        <p><NavLink to="/">Sản Phẩm</NavLink></p>
                        <span className="divider">/</span>
                        <h3><strong><NavLink to="/mohinhanime">{pagetitle}</NavLink></strong></h3>
                    </div>
                    <div className="title-page-right">
                        {renderSortOptions()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagetitle;
