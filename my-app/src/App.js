import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import TrangChu from './pages/Trangchu/trangChu';
import Blog from './pages/Blog/Blog';
import Lienhe from './pages/LienHe/Lienhe';
import Tranhcanva from './pages/TranhCanva/Tranhcanva';
import Mohinh from './pages/MoHinhAnime/Mohinh'
import Vaidecor from './pages/VaiDecor/Vaidecor';
import Chitiet from './pages/ChiTiet/Chitiet';

function App() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div className="App">
            {/* {loading && (
                <div className="saringan">
                    <div class="sharingon">
                        <div class="ring">
                            <div class="to"></div>
                            <div class="to"></div>
                            <div class="to"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            )} */}
            <Routes>
                <Route path='/' element={<TrangChu />} />
                <Route path='/mohinhanime' element={<Mohinh />} />
                <Route path='/tranhcanvas' element={<Tranhcanva />} />
                <Route path='/vaidecor' element={<Vaidecor />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/lienhe' element={<Lienhe />} />
                <Route path='/chitiet/:id' element={<Chitiet />} />
            </Routes>
        </div>
    );
}

export default App;