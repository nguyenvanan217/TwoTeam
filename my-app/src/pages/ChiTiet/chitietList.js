// Tạo một context cho tất cả các ảnh trong thư mục
const chiTietsp = require.context("../../assets/chitiet", false, /\.(png|jpg|jpeg)$/);

const anhChiTietSanPham = chiTietsp.keys();

const chiTiet = anhChiTietSanPham.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = chiTietsp(fileName);
    return acc;
}, {});
export const detail = [
    {
        id: 1,
        img: chiTiet.dofla1,
        title: 'Mô hình Donquixote Doflamingo',
        second_img: chiTiet.dofla2,
        price: '1.290.000',
        infor: 'Thông số sản phẩm',
        charac: 'Donquixote Doflamingo',
        series: 'One Piece',
        material: 'Nhựa PVC cao cấp',
        size: '35cm',
        instock: 'còn 14 hàng',
    },
    {
        id: 2,
        img: chiTiet.ace1,
        title: 'Mô hình Portgas D Ace',
        second_img: chiTiet.ace2,
        price: '950.000',
        infor: 'Thông số sản phẩm',
        charac: 'Mô hình Portgas D Ace',
        series: 'One Piece',
        material: 'Nhựa PVC cao cấp',
        size: '30cm',
        instock: 'còn 3 hàng',
    }
];
