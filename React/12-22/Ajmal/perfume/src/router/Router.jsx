import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header/Header'
import Shop from '../component/Header/Shop'
import Home from '../component/Header/Home'


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
