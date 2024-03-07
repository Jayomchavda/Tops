import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Input } from 'reactstrap'
import Home from './Home'
import About from './About'
import Fashion from './Fashion'
import Perfume from './Fashion/Perfume'
import Clothes from './Fashion/Clothes'
import Gogals from './Fashion/Gogals'
import Shoes from './Fashion/Shoes'
import UserCrud from './UserCrud'
import Header from './Fashion/Header'
import Product from './Product'
import Singleproduct from './Singleproduct'
import Users from './Fashion/Users'
import SingleUsers from './SingleUsers'

export default function Router() {
    return (
        <div style={{ borderRadius: "50px", backgroundColor: "#bed9f1" }} className='header1 '>
            <BrowserRouter>
                <Header />

                <div className='align-content-center text-center   '>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path="/user" element={<UserCrud />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:id" element={<Singleproduct />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/singleusers/:id" element={<SingleUsers />} />



                        {/* =================nested router ================ */}
                        <Route path='/fashion'  >

                            <Route index element={<Fashion />} />

                            <Route path="/fashion/perfume" element={<Perfume />} />
                            <Route path="/fashion/clothes" element={<Clothes />} />
                            <Route path="/fashion/gogals" element={<Gogals />} />
                            <Route path="/fashion/shoes" element={<Shoes />} />
                        </Route>
                    </Routes>
                </div>

            </BrowserRouter >
        </div >
    )
}
