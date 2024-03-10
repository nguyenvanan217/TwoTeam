import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dofla from '../../../assets/chitiet/dofla1.png';
import dofla2 from '../../../assets/chitiet/dofla2.png';
import '../Chitiettop/Chitiettop.css';

function Chitiettop() {
    const [count, setCount] = useState(1);
    const [productImage, setProductImage] = useState(dofla);
    const [selectedImage, setSelectedImage] = useState(dofla);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleReduce = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleImageClick = (image) => {
        setProductImage(image);
        setSelectedImage(image);
    };

    return (
        <div>
            <div className="producs-container">
                <div className="products-main">
                    <div className="products-left-left">
                        <img src={productImage} alt="Product" />
                        <div className="product-left-footer">
                            <img src={dofla} alt="" onClick={() => handleImageClick(dofla)} style={{ filter: selectedImage === dofla2 ? 'none' : 'grayscale(1)' }} />
                            <img src={dofla2} alt="" onClick={() => handleImageClick(dofla2)} style={{ filter: selectedImage === dofla ? 'none' : 'grayscale(1)' }} />
                        </div>
                    </div>
                    <div className="products-left-right">
                        <h1 className='inf-title1'>Mô hình Donquixote Doflamingo</h1>
                        <strong className='big-price'>1.290.000<sup>đ</sup></strong>
                        <h2 className='inf-title1'>Thông số sản phẩm</h2>
                        <ul className='list-infor'>
                            <li>Nhân Vật: Donquixote Doflamingo</li>
                            <li>Series: One Piece</li>
                            <li>Chất Liệu: Nhựa PVC cao cấp</li>
                            <li>Tình trạng: New, full box</li>
                            <li>Kích thước: 35cm</li>
                        </ul>
                        <span className='instock'>còn 14 hàng</span>
                        <div className="soluong">
                            <span>Số Lượng:</span>
                            <input type='text' value={count} readOnly />
                            <div className="btn">
                                <button onClick={handleIncrease}>+</button>
                                <button onClick={handleReduce}>-</button>
                            </div>
                            <button className='add-card'>Thêm Vào Giỏ Hàng</button>
                        </div>
                        <button className='buynow'>Mua Ngay
                            <br />Gọi điện xác nhận và giao hàng tận nơi</button>
                    </div>
                </div>
                <div className="products-right">
                    <div className='category1'>
                        <h1 className='inf-title1'>Danh mục sản phẩm</h1>
                        <ul className='danhmuc'>
                            <li><NavLink to="/mohinhanime">Mô Hình Anime</NavLink></li>
                            <li><NavLink to="/tranhcanvas">Tranh Canvas Anime</NavLink> </li>
                            <li><NavLink to="/vaidecor">Vải Decor Anime</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chitiettop;
