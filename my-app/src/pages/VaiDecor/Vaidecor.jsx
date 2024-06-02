import {React, useState} from 'react'
import Navbar from "../../components/header/Navbar";
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Mohinhleft from '../MoHinhAnime/Mohinhleft/Mohinhleft';
import Mohinhright from '../MoHinhAnime/Mohinhright/Mohinhright'
import '../MoHinhAnime/Mohinh.css';
import '../MoHinhAnime/Mohinhleft/Goodproductlist/Mohinhleft.css'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../../components/footer/footer';
function Vaidecor() {
    const [sortValue, setSortValue] = useState("");

    const handleSortChange = (selectedValue) => {
        setSortValue(selectedValue);
    };
    const [showDropdown] = useState(true);
    return (
        <div>
            <Navbar />
            <Pagetitle pagetitle="Vải Decor Anime" onSortChange={handleSortChange} isDropdown={showDropdown} />
            <div className='mohinh-products container-maxWidth py-2'>
                <Mohinhleft productType="Vải Decor" />
                <Mohinhright category="set-decal" sortValue={sortValue} />
                <ScrollToTopButton />
            </div>
            <Footer />
        </div>
    )
}

export default Vaidecor
