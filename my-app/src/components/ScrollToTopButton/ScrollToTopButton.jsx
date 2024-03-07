import React, { useEffect, useState } from 'react';

import { SlArrowUp } from "react-icons/sl";

const ScrollToTopButton = () => {
    const [isButtonVisible, setIsButtonVisible] = useState(true)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsButtonVisible(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <button onClick={scrollToTop}
            style={{ display: isButtonVisible ? "block" : "none" }}
            className='fixed bottom-7 left-5 border-2 border-black rounded-[5px] text-black text-[13px] p-[0.9em] transition-all duration-300 ease-in-out hover:bg-[#b20000] hover:border-[#b20000] hover:text-white'
        >
            <SlArrowUp />
        </button>
    )

}

export default ScrollToTopButton;