import { Routes, Route } from 'react-router-dom';

import './App.css';
import Trangchu from './pages/Trangchu/Trangchu';
import Blog from './pages/Blog/Blog';
import Lienhe from './pages/LienHe/Lienhe';
import Tranhcanva from './pages/TranhCanva/Tranhcanva';
import Mohinh from './pages/MoHinhAnime/Mohinh'
import Vaidecor from './pages/VaiDecor/Vaidecor';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Trangchu />} />
                <Route path='/mohinhanime' element={<Mohinh />} />
                <Route path='/tranhcanvas' element={<Tranhcanva />} />
                <Route path='/vaidecor' element={<Vaidecor />} />
                <Route path='/blog' element={<Blog/>} />
                <Route path='/lienhe' element={<Lienhe />} />
            </Routes>
        </div>
    );
}

export default App;
