import React from 'react'

export default function Header() {
    return (
        <div style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            minWidth: "100vw",
            minHeight: "100px",
            padding: "30px"
        }}>
            <h1 className='head1'>Header</h1>
        </div>
    )
}
