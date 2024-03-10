import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../UI/Home/Home'
import About from '../UI/About/About'
import Resume from '../UI/Resume/Resume'
import Contact from '../UI/Contact/Contact'
import Header from '../Component/Header/Header'

export default function Router() {
    return (

        <BrowserRouter>
            <Header />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }} >
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>

    )
}
