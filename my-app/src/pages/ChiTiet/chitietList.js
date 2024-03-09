// Tạo một context cho tất cả các ảnh trong thư mục
const chiTietsp = require.context("../../assets/chitiet", false, /\.(png|jpg|jpeg)$/);

const anhChiTietSanPham = chiTietsp.keys();

const chiTiet = anhChiTietSanPham.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = chiTietsp(fileName);
    return acc;
}, {});
export const chitiet = [
    {
        title: 'Mô hình Donquixote Doflamingo',
        img: chiTiet.dofla1,
        second_img:chiTiet.dofla2
    }
]