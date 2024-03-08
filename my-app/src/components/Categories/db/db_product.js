import doflamingo from '../../../assets/product/dofla.png';
import age from '../../../assets/product/age.png';
import zoro from '../../../assets/product/zoro.png';
import mabu from '../../../assets/product/mabu.jpg';

// Tạo một context cho tất cả các ảnh trong thư mục
const imageContext = require.context("../../../assets/product/top-ban-chay", false, /\.(png|jpg|jpeg)$/);

// Lấy danh sách tất cả các tên tệp trong thư mục
const imageFileNames = imageContext.keys();

// Import tất cả các ảnh và lưu chúng vào một đối tượng
const imgTopBanChay = imageFileNames.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = imageContext(fileName);
    return acc;
}, {});


// Tạo một context cho tất cả các ảnh trong thư mục
const tranhCanvaContext = require.context("../../../assets/product/tranh-canva", false, /\.(png|jpg|jpeg)$/);

const imageFileTranhCanva = tranhCanvaContext.keys();

const imgTranhCanva = imageFileTranhCanva.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = tranhCanvaContext(fileName);
    return acc;
}, {});

// Tạo một context cho tất cả các ảnh trong thư mục
const moHinhDepConText = require.context("../../../assets/product/mo-hinh-dep", false, /\.(png|jpg|jpeg)$/);

const imageFileMoHinhDep = moHinhDepConText.keys();

const imgMoHinhDep = imageFileMoHinhDep.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = moHinhDepConText(fileName);
    return acc;
}, {});

// Tạo một context cho tất cả các ảnh trong thư mục
const vaiDecorConText = require.context("../../../assets/product/vai-decor", false, /\.(png|jpg|jpeg)$/);

const imageFileVaiDecor = vaiDecorConText.keys();

const imgVaiDecor = imageFileVaiDecor.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = vaiDecorConText(fileName);
    return acc;
}, {});


// Tạo một context cho tất cả các ảnh trong thư mục
const setDecalConText = require.context("../../../assets/product/set-decal", false, /\.(png|jpg|jpeg)$/);

const imageFileSetDecal = setDecalConText.keys();

const imgSetDecal = imageFileSetDecal.reduce((acc, fileName) => {
    const imageName = fileName.replace(/^.*[\\/]/, "").split(".")[0];
    acc[imageName] = setDecalConText(fileName);
    return acc;
}, {});


export const db_product = [
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.gara_1,
        title: 'Mô hình Figure Garaa Nhất Vĩ Naruto Resin',
        discount: '',
        price: '290.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.kakasi_1,
        title: 'Mô hình Hatake Kakashi Dog Resin',
        discount: '',
        price: '2.000.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.kakasi_b_1,
        title: 'Mô hình Hatake Kakashi Anbu Dog Resin',
        discount: '',
        price: '1.600.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.pain_1,
        title: 'Mô hình Akatsuki Pain Resin Naruto',
        discount: '',
        price: '1.850.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.sen_1,
        title: 'Mô hình xên bọ hung (Cell)',
        discount: '',
        price: '590.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.mo_hinh_mabu_1,
        title: 'Mô Hình Ma Bư Mập',
        discount: '290.000',
        price: '288.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.mo_hinh_Goku_cuoi_may,
        title: 'Mô hình Goku cưỡi mây',
        discount: '',
        price: '290.000',
    },
    {
        categories: 'mo-hinh-dep',
        avatar: imgMoHinhDep.mo_hinh_Goku_SSJ_cap_2_1,
        title: 'Mô hình Goku SSJ cấp 2',
        discount: '',
        price: '449.000',
    },
    {
        categories: 'set-decal',
        avatar: imgSetDecal.truy_na_trong_one_piece,
        title: 'Decal dán tường về lệnh truy nã trong One Piece',
        discount: '',
        price: '50.000',
    },
    {
        categories: 'set-decal',
        avatar: imgMoHinhDep.mo_hinh_Goku_cuoi_may,
        title: 'Mô hình Goku cưỡi mây',
        discount: '',
        price: '290.000',
    },
    {
        categories: 'set-decal',
        avatar: imgMoHinhDep.mo_hinh_Goku_SSJ_cap_2_1,
        title: 'Mô hình Goku SSJ cấp 2',
        discount: '',
        price: '449.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.sen_1,
        title: 'Mô hình xên bọ hung (Cell)',
        discount: '',
        price: '590.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.mo_hinh_goku,
        title: 'Mô hình Goku SSJ4 2D',
        discount: '',
        price: '829.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.zoro_1,
        title: 'Mô hình Zorojuurou',
        discount: '1.300.000',
        price: '1.150.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.COMBO_2_TRANH_TREO_TUONG_ANIME_LUFFY,
        title: 'Combo 2 Tranh Treo Tường Luffy Vs Usopp',
        discount: '',
        price: '495.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.mo_hinh_Goku_cuoi_may,
        title: 'Mô hình Goku cưỡi mây',
        discount: '',
        price: '290.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.ace,
        title: 'Decal Dán Tường Ace',
        discount: '',
        price: '300.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.tranh_tro_tuong_goku,
        title: 'Vải Decor Super Goku 2021',
        discount: '',
        price: '250.000',
    },
    {
        categories: 'top-ban-chay',
        avatar: imgTopBanChay.tranh_treo_tuong_zoro,
        title: 'Decal Dán Tường Zoro',
        discount: '',
        price: '79.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_luffy,
        title: 'Combo 2 Tranh Treo Tường Luffy Vs Usopp',
        discount: '',
        price: '495.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_luffy_and_law,
        title: 'Combo 2 Tranh Treo Tường Anime Luffy Vs Law',
        discount: '400.000',
        price: '495.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_luffy_and_ace,
        title: 'Combo 2 tranh treo tường anime luffy vs ace',
        discount: '400.000',
        price: '495.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_luffy_wano,
        title: 'tranh treo tường luffy',
        discount: '400.000',
        price: '495.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_zoro,
        title: 'Combo 2 Tranh Treo Tường Anime Zoro',
        discount: '400.000',
        price: '495.000',
    },
    {
        categories: 'tranh-canva',
        avatar: imgTranhCanva.tranh_treo_tuong_doffy,
        title: 'Combo 2 Tranh Treo Tường Dofflamingo Vs Rosinante',
        discount: '400.000',
        price: '495.000',
    },
    {
        categories: 'set-decal',
        avatar: imgVaiDecor.d1,
        title: 'Vải Decor Dragon Ball 2021',
        discount: '',
        price: '50.000',
    },
    {
        categories: 'set-decal',
        avatar: imgVaiDecor.n1,
        title: 'Vải Decor Naruto 01',
        discount: '',
        price: '250.000',
    },
    {
        categories: 'vai-decor',
        avatar: imgVaiDecor.d1,
        title: 'Vải Decor Dragon Ball 2021',
        discount: '',
        price: '50.000',
    },
    {
        categories: 'vai-decor',
        avatar: imgVaiDecor.n1,
        title: 'Vải Decor Naruto 01',
        discount: '',
        price: '250.000',
    },

];
