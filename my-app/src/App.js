import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import TrangChu from './pages/Trangchu/TrangChu';
import Blog from './pages/Blog/Blog';
import Lienhe from './pages/LienHe/Lienhe';
import Tranhcanva from './pages/TranhCanva/Tranhcanva';
import Mohinh from './pages/MoHinhAnime/Mohinh'
import Vaidecor from './pages/VaiDecor/Vaidecor';

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
            {loading && (
                // <div class="container center">
                //     <div class="rope center">
                //         <div class="legs center">
                //             <div class="boot-l"></div>
                //             <div class="boot-r"></div>
                //         </div>
                //         <div class="costume center">
                //             <div class="spider">
                //                 <div class="s1 center"></div>
                //                 <div class="s2 center"></div>
                //                 <div class="s3"></div>
                //                 <div class="s4"></div>
                //             </div>
                //             <div class="belt center"></div>
                //             <div class="hand-r"></div>
                //             <div class="hand-l"></div>
                //             <div class="neck center"></div>
                //             <div class="mask center">
                //                 <div class="eye-l"></div>
                //                 <div class="eye-r"></div>
                //             </div>
                //             <div class="cover center"></div>
                //         </div>
                //     </div></div>
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
            )}
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
