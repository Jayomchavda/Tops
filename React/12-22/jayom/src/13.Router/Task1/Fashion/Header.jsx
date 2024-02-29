import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div> <div className='liset d-flex gap-4'>
            <h1>LOGO</h1>

            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"about"}>ABOUT</NavLink>
            <NavLink to={"fashion"}>FASHION</NavLink>
            <NavLink to={"product"}>PRODUCT</NavLink>
            <NavLink to={"users"}>USERS</NavLink>
            <NavLink to={"user"}>LOGIN</NavLink>
        </div></div>
    )
}
