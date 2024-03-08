import React from 'react'
import { Listmohinhrightproduct } from './Listmohinhrightproduct'
import Mohinhrightitem from './Mohinhrightitem'

function Mohinhright() {
  return (
    <div>
      <div className='sum-product'>
        <div className='products'>
          {Listmohinhrightproduct.map((listproduct, index) => (
            <Mohinhrightitem key={index} avatar={listproduct.avatar}
              title={listproduct.title} discount={listproduct.discount}
              price={listproduct.price} />
          ))}
        </div>
        <button className='more'>Xem Thêm</button>
      </div>
      <h1 className='inf-title'>Đồ chơi mô hình Anime</h1>
      <h2>Cửa hàng Anime Store chuyên cung cấp các loại đồ chơi mô hình – đồ phụ kiện anime chất lượng. Đặc biệt là bộ mô hình One Piece, Dragon Ball, Naruto trong các bộ truyện tranh cùng tên.

        Với sự đang dạng về mẫu mã chủng loại. Các loại mô hình One Piece, Dragon Ball, Naruto hứa hẹn là bộ sưu tập giá trị bậc nhất trong những bộ mô hình Anime mang đến. Từ những nhân vật nổi tiếng trong những bộ truyện này như: Luffy, Zoro, Sanji, Son Goku, Vegeta, Naruto, Sasuke,…và rất nhiều nhân vật thú vị khác.

        Không chỉ riêng mô hình anime cửa hàng chúng tôi còn cung cấp hàng loạt đồ chơi hót như: Mô hình đồ chơi, Tranh canvas Anime, Decal dán tường Anime, Vải decor Anime,…Và hàng loạt đồ chơi phụ kiện cho anh em đâm mê thể loạt đồ chơi nhân vật phim truyện hoạt hình Nhật Bản.</h2>
      <h1 className='inf-title'>Top sản phẩm nổi bật</h1>
      <p> Mô hình One Piece
        Mô hình Dragon Ball
        Mô hình Naruto
        Tranh canvas, Tranh treo tường, Decal dán tường, và hàng loạt phụ kiện Anime xịn xò.
        Cửa hàng Anime Store cam kết những sản phẩm chúng tôi bán ra đều là sản phẩm chất lượng cao. Chế độ bảo hành số 1 tại Việt Nam.</p>
    </div>
  )
}

export default Mohinhright
