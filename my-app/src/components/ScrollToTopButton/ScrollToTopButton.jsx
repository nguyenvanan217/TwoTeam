import React from 'react'
import toTop from '../../assets/product/totop.png'
import './ScrollToTopButton.css'
function ScrollToTopButton() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <a className='totop' href='#' onClick={scrollToTop}>
            <img src={toTop} alt="" />
        </a>
    );
}
export default ScrollToTopButton
