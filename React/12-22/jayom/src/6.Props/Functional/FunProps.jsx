import React, { Component } from 'react'

export default function FunProps(Props) {

    return (
        <div className='d-flex  align-items-center flex-column '>
            <h1>My name is{Props.name} </h1>
            <h1>And age is{Props.name} </h1>

        </div>
    )
}
