// import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Home/>
            <Footer />
        </div>
    );
}

export default App;
