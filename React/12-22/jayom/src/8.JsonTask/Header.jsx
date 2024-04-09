import React from 'react'
import { Input } from 'reactstrap'
import "./Style.css"

export default function Header() {
    return (
        <div className='headercom'>
            <div>
                <h1 >LOGO</h1>
            </div>
            <div className='headerli' fw-medium >
                <li> <a href="">HOME</a></li>
                <li> <a href=""> ABOUT </a></li>
                <li> <a href=""> SERVICE </a></li>
                <li> <a href=""> SHOWCASE </a></li>
                <li> <a href=""> CONTACT </a></li>
            </div>
            <div>
                <Input className='inputbox' placeholder='Search here' />
                <i className="bi bi-search"></i>

            </div>
        </div>
    )
}
