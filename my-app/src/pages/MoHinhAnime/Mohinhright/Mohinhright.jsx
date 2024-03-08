import React, { useState } from 'react';
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

import Product from '../../../components/Categories/Product';
import { db_product } from '../../../components/Categories/db/db_product';
import './../Mohinh.css';

function Mohinhright() {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div>
      <div className='sum-product'>
        <Product productList={db_product} categories={"mo-hinh-dep"} />
        <button className='more' onClick={toggleContent}>
          {showFullContent ? <>Đóng<MdOutlineExpandLess /></> : <>Đọc Thêm<MdOutlineExpandMore /> </>}
        </button>
      </div>
      {showFullContent && (
        <div>
          <h1 className='inf-title'>Đồ chơi mô hình Anime</h1>
          <h2 className='mt-[20px]'>
            Cửa hàng <b className='font-[550]'>TwoTeam</b> chuyên cung cấp các loại đồ chơi mô hình –
            đồ phụ kiện anime chất lượng. Đặc biệt là bộ mô hình One Piece,
            Dragon Ball, Naruto trong các bộ truyện tranh cùng tên.
            <br /><br />
            Với sự đang
            dạng về mẫu mã chủng loại. Các loại mô hình One Piece, Dragon Ball,
            Naruto hứa hẹn là bộ sưu tập giá trị bậc nhất trong những bộ mô
            hình Anime mang đến. Từ những nhân vật nổi tiếng trong những bộ
            truyện này như: Luffy, Zoro, Sanji, Son Goku, Vegeta, Naruto,
            Sasuke,…và rất nhiều nhân vật thú vị khác.
            <br /> <br />
            Không chỉ riêng mô hình anime cửa hàng chúng tôi còn cung cấp hàng loạt đồ chơi
            hót như: Mô hình đồ chơi, Tranh canvas Anime, Decal dán tường
            Anime, Vải decor Anime,…Và hàng loạt đồ chơi phụ kiện cho anh
            em đâm mê thể loạt đồ chơi nhân vật phim truyện hoạt hình Nhật
            Bản.
            <br /> <br />
          </h2>
          <h1 className='inf-title'>Top sản phẩm nổi bật</h1>
          <h2 className='mt-[20px]'>
            Mô hình One Piece
            <br /> <br />
            Mô hình Dragon Ball
            <br /> <br />
            Mô hình Naruto Tranh
            <br /> <br />
            canvas, Tranh treo tường, Decal dán tường, và hàng loạt phụ kiện
            Anime xịn xò.
            <br /> <br />Cửa hàng <b className='font-[550]'>TwoTeam</b> cam kết những sản phẩm chúng
            <br /> <br />
          </h2>
          <h1 className='inf-title'>Tại sao nên mua đồ chơi tại TwoTeam?</h1>
          <h2 className='mt-[20px]'> Sản phẩm độc lạ được chọn lọc kỹ càng
            Cửa hàng đồ chơi uy tín, giá rẻ nhiều ưu đãi
            <br /> <br />
            Chế độ bảo hành 1 đôi 1 không tính chi phí phát sinh
            <br /> <br />
            Tập trung vào những sản phẩm mô hình anime chất lượng
            <br /> <br />
            Cửa hàng <b className='font-[550]'>TwoTeam</b> cam kết những sản phẩm chúng tôi bán ra đều là sản phẩm chất lượng cao. Chế độ bảo hành số 1 tại Việt Nam.
          </h2>
        </div>
      )}
    </div>
  );
}

export default Mohinhright;
