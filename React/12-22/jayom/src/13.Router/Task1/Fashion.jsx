import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Fashion() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <h1>Fashion</h1>
                <div className=''  >
                    <Button className='w-25 ' color='danger'>
                        <NavLink style={{ color: "white" }} to={"/fashion/perfume"}>Perfume</NavLink>
                    </Button>
                    <Button className='w-25' color='danger'>
                        <NavLink style={{ color: "white" }} to={"/fashion/clothes"}>Clothes</NavLink>
                    </Button>
                    <Button className='w-25' color='danger'>
                        <NavLink style={{ color: "white" }} to={"/fashion/gogals"}>Gogals</NavLink>
                    </Button>
                    <Button className='w-25' color='danger'>
                        <NavLink style={{ color: "white" }} to={"/fashion/shoes"}>Shoes</NavLink>
                    </Button>
                </div>
                <hr />
                <Button color='danger' onClick={() => navigate("/")}>Go To Home</Button>
            </div>
            <Outlet />
        </>
    )
}
