import { CircleUserRound, Heart, Home, MessageCircle, Shirt, ShoppingCart, User, Users } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <div div className='liset      ' >
                <img src="https://w7.pngwing.com/pngs/270/82/png-transparent-t-shirt-hat-suit-clothing-a-silhouette-of-a-man-with-a-hat-other-fashion-logo.png" alt="" srcset="" height="60px" style={{ borderRadius: "50px" }} />
                <h1 style={{ width: "400px", fontFamily: "cursive" }}>Fashion Hub</h1>

                <NavLink to={"/"}><Home />HOME</NavLink>
                <NavLink to={"about"}><MessageCircle /> ABOUT</NavLink>
                <NavLink to={"fashion"}><Shirt />FASHION</NavLink>
                <NavLink to={"product"}><ShoppingCart />PRODUCT LIST</NavLink>
                <NavLink to={"users"}><Users />USERS</NavLink>
                <NavLink to={"wishlist"}><Heart /> WISHLIST</NavLink>
                <NavLink to={"login"}><User /> LOGIN</NavLink>
                <NavLink to={"account"}><CircleUserRound />ACCOUNT</NavLink>
            </div >
        </div >

    )
}
