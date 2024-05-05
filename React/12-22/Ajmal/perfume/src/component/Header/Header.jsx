import React, { useState } from 'react';
import logo from "../../../public/ajmallogo.svg";
import { Navbar, NavbarBrand, NavbarCollapse } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { Heart, LogIn, Search, ShoppingCart } from "react-feather";
import { Link } from 'react-router-dom';


export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };



    return (
        <div className="relative">
            {/* Page content */}
            <Navbar fluid rounded className="m-0 py-4 border-b">
                <NavbarBrand className="pl-10">
                    <Link to="/">
                        <img src={logo} className="mr-3 h-[70px]" alt="Flowbite React Logo" />
                    </Link>

                </NavbarBrand>

                <NavbarCollapse>
                    <div className="w-[500px] ">
                        <div className="flex justify-center focus-within:border-gray-400 text-gray-400 border-2 border-gray-300 items-center p-0 m-0 bg-white rounded-3xl px-3 overflow-hidden mb-3 ">
                            <input
                                type="text"
                                placeholder="search your fragrance here..."
                                className="placeholder-gray-300 focus:ring-0 border-none w-full p-1 rounded-l-3xl"
                            />
                            <Search className="text-gray-400 rounded-r-3xl" />
                        </div>
                        <div className="flex justify-between [&_*]:font-bold [&_*]:text-gray-500">
                            <NavLink to="" active>
                                Home
                            </NavLink>
                            <NavLink to="shop">Shop</NavLink>
                            <NavLink to="#">Ajmal Studio</NavLink>
                            <NavLink to="#">About</NavLink>
                            <NavLink to="#">Our Stores</NavLink>
                        </div>
                    </div>
                </NavbarCollapse>
                <div className="flex items-center [&_*]:mr-5 text-gray-400">
                    <img
                        src="https://in.ajmal.com/media//homepage/country_flag/india.webp"
                        alt=""
                        className="w-[30px] h-[30px] rounded-3xl border border-gray-500"
                    />
                    <LogIn role='button' />
                    <ShoppingCart role='button' />
                    <Heart role='button' onClick={toggleSidebar} />
                </div>
            </Navbar>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 right-0 w-80 bg-gray-900 text-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{
                zIndex: 5555, top: 120
            }}>

                <div className="p-4 flex justify-center items-center gap-3 ">
                    <Heart />
                    <h2 className='text-[23px] title'>My Wishlist</h2>
                    <Heart />
                </div>
                <hr className='mt-4' />/
            </div>
        </div>
    );
}
