// import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Trang_chu from './pages/Trang-chu/Trang_chu';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Trang_chu />
            <Footer />
        </div>
    );
}

export default App;
