// import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Trang_chu from './pages/trang_chu/Trang_chu';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Trang_chu/>
            <Footer />
        </div>
    );
}

export default App;
