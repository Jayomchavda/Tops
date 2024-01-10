import React, { useState } from 'react'
import "../8.JsonTask/Header"
import Header from '../8.JsonTask/Header'
import Data from "../9.CityTask/City.json"
import CityCard from './CityCard'
import "./Style.css"

export default function CityContent() {

    let [City, Setcity] = useState(Data)

    return (
        <div>
            <Header />

            <div className='citycontain'>
                {
                    City.map((e,) => {
                        return <CityCard item={e} />
                    })
                }
            </div>
        </div>
    )
}
