import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import TrangChu from './pages/Trangchu/Trangchu';
import Blog from './pages/Blog/Blog';
import Lienhe from './pages/LienHe/Lienhe';
import Tranhcanva from './pages/TranhCanva/Tranhcanva';
import Mohinh from './pages/MoHinhAnime/Mohinh'
import Vaidecor from './pages/VaiDecor/Vaidecor';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<TrangChu />} />
                <Route path='/mohinhanime' element={<Mohinh />} />
                <Route path='/tranhcanvas' element={<Tranhcanva />} />
                <Route path='/vaidecor' element={<Vaidecor />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/lienhe' element={<Lienhe />} />
            </Routes>
        </div>
    );
}

export default App;
