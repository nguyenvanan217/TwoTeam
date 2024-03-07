// import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import TrangChu from './pages/trangChu/trangChu';
function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <TrangChu />
            {/* <Footer /> */}
            {/* <ScrollToTopButton /> */}
        </div>
    );
}

export default App;
