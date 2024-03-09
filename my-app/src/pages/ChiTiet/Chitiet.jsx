import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'

function Chitiet() {
    const [showDropdown] = React.useState(false);

    return (
        <div>
            <Navbar />
            <Pagetitle pagetitle="Chi Tiết Sản Phẩm" isDropdown={showDropdown} />
            
        </div>
    )
}

export default Chitiet
