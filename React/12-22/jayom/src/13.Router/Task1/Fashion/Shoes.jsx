import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

export default function Shoes() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Shoes</h1>
            <Button color='danger' onClick={() => navigate("/fashion")}>Go to Service</Button>

        </div>
    )
}
