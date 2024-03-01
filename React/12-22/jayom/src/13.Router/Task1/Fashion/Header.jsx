import { Heart, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div> <div className='liset d-flex gap-4  '>
            <h1>Fashion Hub</h1>

            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"about"}>ABOUT</NavLink>
            <NavLink to={"fashion"}>FASHION</NavLink>
            <NavLink to={"product"}>PRODUCT LIST</NavLink>
            <NavLink to={"users"}>USERS</NavLink>
            <NavLink to={"wishlist"}><Heart /> Wishlist</NavLink>
            <NavLink to={"user"}><User />ACCOUNT</NavLink>
        </div></div>
    )
}
