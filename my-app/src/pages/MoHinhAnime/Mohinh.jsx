import React, { useState } from 'react'
import Navbar from '../../components/header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Mohinhleft from './Mohinhleft/Mohinhleft'
import Mohinhright from './Mohinhright/Mohinhright'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../../components/footer/footer'
import '../../pages/MoHinhAnime/Mohinh.css'
function Mo_hinh() {
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (selectedValue) => {
    setSortValue(selectedValue);
  };
  const [showDropdown] = useState(true);

  return (
    <div>
      <Navbar />
      <Pagetitle pagetitle="Mô Hình Anime" onSortChange={handleSortChange} isDropdown={showDropdown} />
      <div className="my-body">
        <div className='mohinh-products container-maxWidth py-2'>
          <Mohinhleft productType="Mô hình anime"/>
          <Mohinhright category="mo-hinh-dep" sortValue={sortValue} />
          <ScrollToTopButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mo_hinh
