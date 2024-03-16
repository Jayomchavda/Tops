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
import Wishlist from './Fashion/Wishlist'
import Login from './Fashion/Login'
import Profile from './Profile'
import Signup from './Signup'
import Register from './Register'

export default function Router() {
    return (
        <div style={{ borderRadius: "50px", backgroundColor: "#bed9f1" }} className='header1 '>
            <BrowserRouter>
                <Header />

                <div className='align-content-center text-center mt-4     '>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path="/account" element={<UserCrud />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/product/:id" element={<Singleproduct />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/singleusers/:id" element={<SingleUsers />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/register" element={<Register />} />





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
