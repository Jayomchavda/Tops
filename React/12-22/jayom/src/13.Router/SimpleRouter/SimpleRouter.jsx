import React from 'react'
import About from './About'
import Service from './Service'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function SimpleRouter() {
    return (
        <div>
            <BrowserRouter>
                <div className='s1 d-flex gap-3 fs-5'>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"About"}>About</NavLink>
                    <NavLink to={"Service"}>Service</NavLink>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                </Routes>
            </BrowserRouter>



        </div>
    )
}
