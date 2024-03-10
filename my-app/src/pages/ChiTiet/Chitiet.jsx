import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Chitiettop from './Chitiettop/Chitiettop';
import Chitietbtt from './Chitietbtt/Chitietbtt';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom';
function Chitiet() {
    const [showDropdown] = React.useState(false);

    return (
        <div>
            <Navbar />
            <Pagetitle pagetitle="Chi Tiết Sản Phẩm" isDropdown={showDropdown} />
            <Chitiettop />
            <Chitietbtt />
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}

export default Chitiet
