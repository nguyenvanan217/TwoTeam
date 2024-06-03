import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Chitiettop/Chitiettop.css';
import { useParams } from 'react-router-dom';
import { db_product } from '../../../components/Categories/db/db_product';
import BuyNow from '../../../components/BuyNow/BuyNow';

function Chitiettop() {
    const [count, setCount] = useState(1);
    const updateCount = (newCount) => {
        setCount(newCount);
    };
    const { id } = useParams();
    const product = db_product.find(item => item.id == id);
    console.log(id);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleReduce = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const [showBuyNow, setShowBuyNow] = useState(false);
    const handleShowBuyNow = () => {
        setSelectedProduct(product);
        setShowBuyNow(!showBuyNow);
    };
    const handleCloseBuyNow = () => {
        setShowBuyNow(false);
    };
    const [img, setImg] = useState(product.detail[0].img);
    const [selectImg, setSelectImg] = useState(product.detail[0].img);
    const handleImage = (imageUrl) => {
        setImg(imageUrl);
        setSelectImg(imageUrl);
    };
    return (
        <div>
            {showBuyNow && <BuyNow updateCount={updateCount} quantity={count} product={selectedProduct} handleClose={handleCloseBuyNow} />}
            <div className="producs-container">
                <div className="products-main">
                    <div className="products-left-left">
                        <img src={img} alt="Product" />
                        <div className="product-left-footer">
                            <img src={product.detail[0].img}
                                alt=""
                                onClick={() => handleImage(product.detail[0].img)}
                                style={{ filter: selectImg === product.detail[0].img ? 'grayscale(1)' : 'none' }} />
                            <img src={product.detail[0].second_img}
                                alt=""
                                onClick={() => handleImage(product.detail[0].second_img)}
                                style={{ filter: selectImg === product.detail[0].second_img ? 'grayscale(1)' : 'none' }} />
                        </div>
                    </div>
                    <div className="products-left-right">
                        <h1 className='inf-title1'>{product.detail[0].title}</h1>
                        <strong className='big-price'>{product.price}<sup>đ</sup></strong>
                        <h2 className='inf-title1'>Thông số sản phẩm</h2>
                        <ul className='list-infor'>
                            <li>Nhân Vật: {product.detail[0].charac}</li>
                            <li>Series: {product.detail[0].series}</li>
                            <li>Chất Liệu: {product.detail[0].material}</li>
                            <li>Tình trạng: New, full box</li>
                            <li>Kích thước: {product.detail[0].size}</li>
                        </ul>
                        <span className='instock'>{product.detail[0].instock}</span>
                        <div className="soluong">
                            <span>Số Lượng:</span>
                            <input type='text' value={count} readOnly />
                            <div className="btn">
                                <button onClick={handleIncrease}>+</button>
                                <button onClick={handleReduce}>-</button>
                            </div>
                            <Link to= "/them_muasp" ><button className='add-card'>Thêm Vào Giỏ Hàng</button></Link>
                        </div>
                        <button className='buynow' onClick={handleShowBuyNow}>Mua Ngay
                            <br />Gọi điện xác nhận và giao hàng tận nơi
                        </button>
                    </div>
                </div>
                <div className="products-right">
                    <div className='category1'>
                        <h1 className='inf-title1'>Danh mục sản phẩm</h1>
                        <ul className='danhmuc'>
                            <li><NavLink to="/">Trang Chủ</NavLink></li>
                            <li><NavLink to="/mohinhanime">Mô Hình Anime</NavLink></li>
                            <li><NavLink to="/tranhcanvas">Tranh Canvas Anime</NavLink> </li>
                            <li><NavLink to="/vaidecor">Vải Decor Anime</NavLink></li>
                            <li><NavLink to="/blog">Blog Giải Trí</NavLink></li>
                            <li><NavLink to="/lienhe">Liên Hệ</NavLink> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Chitiettop;
