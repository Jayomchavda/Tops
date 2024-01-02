import React, { useState } from 'react'
import { Button } from 'reactstrap'

let name = ["Jayom", "Nikhil", "Jay", "Vedant"];
let color = ["red", "pink", "green", "orange"];


export default function StatePro1() {

    let [index, setIndex] = useState(0);
    let [colorIndex, setColorIndex] = useState(0);

    const cngname = () => {
        if (index < color.length - 1) {
            setIndex(index + 1);
        }
        else {
            alert("Finished Name...!");
            setIndex(0);
        }
    }

    const cngcolor = () => {
        if (colorIndex < color.length - 1) {
            setColorIndex(colorIndex + 1);
        }
        else {
            alert("Finished Color...!");
            setColorIndex(0)
        }
    }

    return (
        <div className='d-flex align-items-center flex-column  text-center '>
            <h1>{name[index]}</h1>
            <Button color='danger' onClick={cngname}>Change</Button>

            <hr />
            <div style={{ height: "100px", width: "100px", backgroundColor: color[colorIndex], }} >
            </div>

            <hr />
            <Button color='danger' onClick={cngcolor}>Change Color</Button>

        </div >
    )
}
