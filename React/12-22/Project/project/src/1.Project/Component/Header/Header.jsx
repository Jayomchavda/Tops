import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import { Contact, Home, MessageCircle, Phone, Receipt, ReceiptCentIcon, Search, User } from 'lucide-react'
import { Input } from 'reactstrap'

export default function Header() {
    return (

        <div className='headercom'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2Su_acuNksn_4ga4YgMA6aDUBNRI6YuEYA&usqp=CAU" style={{ width: "60px", borderRadius: "50px", marginLeft: "30px" }} />
            <h1 style={{ marginLeft: "10px" }}>Portfolio</h1>

            <div className='navlink'>
                <NavLink to={"/"}><Home /> Home</NavLink >
                <NavLink to={"/about"}> <MessageCircle /> About</NavLink >
                <NavLink to={"/resume"}><User /> Resume</NavLink >
                <NavLink to={"/contact"}><Phone /> Contact</NavLink >

            </div>

        </div>

    )
}
