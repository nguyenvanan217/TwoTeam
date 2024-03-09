import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Mohinhleft from './Mohinhleft/Mohinhleft'
import Mohinhright from './Mohinhright/Mohinhright'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import Footer from '../../components/Footer/Footer'
import '../../pages/MoHinhAnime/Mohinh.css'
function Mo_hinh() {
  const [sortValue, setSortValue] = useState("");

  const handleSortChange = (selectedValue) => {
    setSortValue(selectedValue);
  };

  return (
    <div>
      <Navbar />
      <Pagetitle pagetitle="Mô Hình Anime" onSortChange={handleSortChange} />
      <div className="my-body">
        <div className='mohinh-products container-maxWidth py-2'>
          <Mohinhleft />
          <Mohinhright sortValue={sortValue} />
          <ScrollToTopButton />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mo_hinh
