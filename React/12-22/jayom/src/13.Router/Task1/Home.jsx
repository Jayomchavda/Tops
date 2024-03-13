import React, { useState } from 'react'
import data from "./Product.json"
import Homecard from './Homecard'

export default function Home() {
    let [productdata, setProductdata] = useState(data)
    console.log("====>", productdata)
    return (
        <div>

            {
                productdata?.map((e, id) => {
                    return <Homecard key={id} item={e} />
                })
            }
        </div>
    )
}
