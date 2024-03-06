// import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/Banner/Banner';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner/>
            <Footer />
        </div>
    );
}

export default App;
