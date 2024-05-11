import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header/Header'
import Shop from '../component/Header/Shop'
import Home from '../component/Header/Home'
import Login from '../component/Header/Login'
import Reg from '../component/Header/Reg'
import Profile from '../component/Header/Profile'
import Ourstore from '../component/Header/Ourstore'


export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Reg />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/ourstore' element={<Ourstore />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
