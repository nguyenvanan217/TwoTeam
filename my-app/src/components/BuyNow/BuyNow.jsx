import React, { useState } from 'react';
import './BuyNow.css'
import { IoIosCloseCircle } from "react-icons/io";

function BuyNow({ updateCount, quantity, product, handleClose }) {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [totalPrice, setTotalPrice] = useState(product.price * quantity);
    const [count, setCount] = useState(quantity);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
        updateCount(newCount);
        calculateTotalPrice(newCount);
    };

    const handleReduce = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            updateCount(newCount);
            calculateTotalPrice(newCount);
        }
    };
    const calculateTotalPrice = (newCount) => {
        const newTotalPrice = (product.price * newCount)
        setTotalPrice(newTotalPrice);
    };
    // tắt mở
    const [isOpen, _setIsOpen] = useState(true)
    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };
    return (
        <div className={`buy-container-main ${isOpen ? 'open' : 'closed'}`}>
            {isOpen && (
                <div className="buy-container ">
                    <div className="buy-title">
                        <h1 className='title-main'>ĐẶT MUA MÔ HÌNH DONQUIXOTE DOFLAMINGO</h1>
                        <IoIosCloseCircle onClick={handleClose} />
                        <div className='buy-main'>
                            <div className="buynow-left">
                                <div className="buynowleft-top">
                                    <div className="buynow-image">
                                        <img src={product.detail[0].img} alt="Product Image" />
                                        <span className='instock'>{product.detail[0].instock}</span>
                                    </div>
                                    <div className="infor">
                                        <h1 className='inf-title'>{product.detail[0].title}</h1>
                                        <strong className='price1'>{product.price}<sup>đ</sup></strong>
                                    </div>
                                </div>
                                <div className="buynowleftbtt">
                                    <div className="soluong">
                                        <span>Số Lượng:</span>
                                        <input type='text' value={count} readOnly />
                                        <div className="btn">
                                            <button onClick={handleIncrease}>+</button>
                                            <button onClick={handleReduce}>-</button>
                                        </div>
                                    </div>
                                    <div className="please">
                                        <strong>Bạn vui lòng nhập đúng số điện thoại để chúng tôi sẽ gọi xác nhận đơn hàng trước khi giao hàng. <br />Xin cảm ơn!</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="buynow-right">
                                <h1><strong>Thông Tin Người Mua:</strong></h1>
                                <div className="name-num">
                                    <input type="text" placeholder='Họ và tên' />
                                    <input type="text" placeholder='Số điện thoại' />
                                </div>
                                <div className="adress-email">
                                    <input type="email" placeholder='Địa chỉ Email (không bắt buộc)' />
                                </div>
                                <div className="adress">
                                    <textarea name="" id="" cols="50" rows="5" placeholder='Địa Chỉ'></textarea>
                                </div>
                                <div className="note">
                                    <textarea name="" id="" cols="50" rows="2" placeholder='Ghi Chú Đơn Hàng (Không bắt buộc)'></textarea>
                                </div>
                                <div className="pay-main">
                                    <h1><strong>Hình thức thanh toán</strong></h1>
                                    <div className="pay">
                                        <input type="radio" id="cash"
                                            name="paymentMethod"
                                            checked={paymentMethod === 'cash'}
                                            onChange={() => handlePaymentMethodChange('cash')} />
                                        <label htmlFor="cash">Trả tiền mặt khi nhận hàng</label>
                                    </div>
                                    <div className="pay">
                                        <input type="radio"
                                            id="check"
                                            name="paymentMethod"
                                            checked={paymentMethod === 'check'}
                                            onChange={() => handlePaymentMethodChange('check')} />
                                        <label htmlFor="check">Kiểm tra thanh toán</label>
                                    </div>

                                </div>
                                <div className="discount">
                                    <strong>Mã giảm giá</strong>
                                    <div className="input-discount">
                                        <input type="text" placeholder='Mã giảm giá' />
                                        <button> Áp dụng</button>
                                    </div>
                                </div>
                                <div className="sum-bank">
                                    <p>Tổng: <strong>{totalPrice.toLocaleString()}.000<sup>đ</sup> </strong></p>
                                    <button className='submit'>Đặt Hàng Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BuyNow;
