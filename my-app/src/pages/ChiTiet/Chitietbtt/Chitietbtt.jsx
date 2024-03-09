import React, { useState } from 'react';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import '../Chitietbtt/Chitietbtt.css'
function Chitietbtt() {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div className='container-maxWidth'>
            <div className='mota'>
                <strong>Mô tả sản phẩm</strong>
            </div>
            <button className='more1' onClick={toggleContent}>
                {showFullContent ? <>Đóng<MdOutlineExpandLess /></> : <>Mục Lục<MdOutlineExpandMore /> </>}
            </button>

            {showFullContent && (
                <div>
                    <h1 className='inf-title'>MÔ HÌNH DONQUIXOTE DOFLAMINGO</h1>
                    <p style={{ display: "flex", alignItems: 'center' }}><h1 className='mota'><strong>Mô hình Donquixote Doflamingo</strong></h1>
                        cực ngầu được làm từ nhựa PVC cao cấp. Sản phẩm mô phỏng nhân vật Doflamingo – nhân vật phản diện chính trong Arc Dressrosa.
                    </p>
                    <h1 style={{ margin: "10px 0px 10px 0px" }}><strong>MỘT VÀI THÔNG TIN VỀ DONQUIXOTE DOFLAMINGO</strong></h1>
                    <p style={{ margin: "10px 0px 40px 0px" }}> <strong>Tiền thưởng:</strong> 340,000,000 (trước đây)

                        Donquixote Doflamingo là một thành viên trong Thất Vũ Hải, là thuyền trưởng của băng hải tặc Donquixote, là Vua của Dressrosa và cũng là người môi giới trong Thế giới ngầm – nơi mà anh ta sử dụng bí danh “Joker”.

                        Tiền treo thưởng của anh trước khi gia nhập Thất Vũ Hải là 340,000,000. Mặc dù xuất hiện thường xuyên trong nửa đầu của seri nhưng khi đó anh chưa có nhiều vai trò lắm trong cốt truyện. Sau timeskip, Joker là nhân vật phản diện chính trong Arc Dressrosa và là nhân vật phản diện trung tâm trong Saga Liên minh Hải tặc.</p>
                    <p style={{ margin: "10px 0px 40px 0px" }}> <strong>NGOẠI HÌNH</strong>Doflamingo là một người đàn ông cực kì cao lớn, tóc vàng với làn da màu đào, thường xuyên mặc đồ lòe loẹt. Dựa trên loài động vật chủ đạo của mình, chim Hồng hạc, trang phục của anh mang màu sắc sáng với chiếc áo khoác là màu hồng đặc trưng. Anh ta đeo một chiếc kính mát tròng đỏ và có kiểu đi khá kì lạ – đi chân vòng kiềng (mặc dù anh không thường xuyên đi như vậy), điều này cũng được dựa trên con vật tượng trưng của anh, chim Hồng hạc.</p>
                </div>
            )}
        </div>
    );
}

export default Chitietbtt;
