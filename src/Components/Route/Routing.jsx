import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Service';
import Navbar from './Components/Navbar';

const Routing = () => {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service' element={<Services />} />
                </Routes>
            </div>
        </>
    )
}

export default Routing