import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Pagetitle from '../../components/PageTitle/Pagetitle'
import Mohinhleft from './Mohinhleft/Mohinhleft'
import Mohinhright from './Mohinhright/Mohinhright'
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import '../../pages/MoHinhAnime/Mohinh.css'
function Mo_hinh() {
  return (
    <div>
      <Navbar />
      <Pagetitle pagetitle="Mô Hình Anime" />
      <div className='mohinh-products'>
        <Mohinhleft />
        <Mohinhright />
        <ScrollToTopButton />
      </div>
    </div>
  )
}

export default Mo_hinh
