import React from 'react'
import { FaSearch } from "react-icons/fa";
import './Goodproductlist/Mohinhleft.css'
import { Listprodutcleft } from './Goodproductlist/Listproductleft';
import ItemLeftProduct from './Goodproductlist/ItemLeftProduct';
import { NavLink } from 'react-router-dom'
function Mohinhleft() {
  return (
    <>
      <div className='mohinh-left'>
        <h1 className='inf-title'>Tìm sản phẩm</h1>
        <div className="search-box">
          <input type="text" placeholder='Tìm kiếm...' />
          <FaSearch />
        </div>
        <div className="good-products">
          <h1 className='inf-title'>Sản phẩm đánh giá cao</h1>
          {Listprodutcleft.map((item, index) => {
            return (
              <ItemLeftProduct key={index} avatar={item.avatar} title={item.title} discount={item.discount} price={item.price} />
            )
          })}
        </div>
        <div className='category'>
          <h1 className='inf-title'>Danh mục sản phẩm</h1>
          <ul>
            <li><NavLink to="/mohinhanime">Mô Hình Anime</NavLink></li>
            <li><NavLink to="/tranhcanvas">Tranh Canvas Anime</NavLink> </li>
            <li><NavLink to="/vaidecor">Vải Decor Anime</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Mohinhleft
