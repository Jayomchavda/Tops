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

export default function Router() {
    return (
        // <div className='header1' style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gridTemplateRows: 'auto 1fr', height: '100vh' }}>
        //     <BrowserRouter>
        //         <div className='d-flex align-items-center gap-5'>
        //             <div>
        //                 <h1>LOGO</h1>
        //             </div>
        //             <div className='d-flex align-items-center gap-5'>
        //                 <NavLink to={"/"}>HOME</NavLink>
        //                 <NavLink to={"about"}>ABOUT</NavLink>
        //                 <NavLink to={"fashion"}>FASHION</NavLink>
        //             </div>
        //             <div style={{ overflowY: 'auto', gridColumn: 'span 2' }}>
        //                 <Routes>
        //                     <Route path='/home' element={<Home />} />
        //                     <Route path='/about' element={<About />} />
        //                     <Route path='/fashion' element={<Fashion />} />
        //                 </Routes>
        //             </div>
        //         </div>
        //     </BrowserRouter>
        // </div>


        <div className='header1'>
            <BrowserRouter>

                <Header />

                <div className='align-content-center text-center   '>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path="/user" element={<UserCrud />} />

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
