import React, { useState } from 'react'
import { Input } from 'reactstrap'

export default function RangeInput() {

    let [price, setPrice] = useState(0);


    const updatePrice = (price) => {
        let newValue = price.target.value;
        setPrice(newValue);
    }


    return (
        <>
            <div>
                <h1>Price is<span id="price"> {price}</span> </h1>
                <form action="range">
                    <label For="vol">volume (0 To 100)</label>
                    <Input onChange={updatePrice} type='range' id='vol' name='vol' min={0} max={100} value={price}></Input>
                    <Input type='submit' style={{ backgroundColor: "red", color: "white" }} />
                </form>
            </div>
        </>
    )
}
