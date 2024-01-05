import React, { useState } from 'react'
import { Button } from 'reactstrap'

let name = ["Jayom", "Nikhil", "Jay", "Vedant"];
let color = ["red", "pink", "green", "orange"];


export default function StatePro1() {

    let [index, setIndex] = useState(0);
    let [colorIndex, setColorIndex] = useState(0);

    //change names of states
    const cngName = () => {
        if (index < name.length - 1) {
            setIndex(index + 1);
        } else if (index === name.length - 1 && confirm("Confirm!")) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    // change color index
    const cngColor = () => {
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
            <h1>{index}{name[index]}</h1>
            <Button color='danger' onClick={cngName}>Change</Button>

            <hr />
            <div style={{ height: "100px", width: "100px", backgroundColor: color[colorIndex], }} >
            </div>

            <hr />
            <Button color='danger' onClick={cngColor}>Change Color</Button>

        </div >
    )
}
