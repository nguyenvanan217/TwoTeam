import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Chitiettop from './Chitiettop/Chitiettop';
import Chitietbtt from './Chitietbtt/Chitietbtt';
import Footer from '../../components/Footer/Footer'
function Chitiet() {
    const [showDropdown] = React.useState(false);

    return (
        <div>
            <Navbar />
            <Pagetitle pagetitle="Chi Tiết Sản Phẩm" isDropdown={showDropdown} />
            <Chitiettop />
            <Chitietbtt/>
            <Footer/>
        </div>
    )
}

export default Chitiet
