import React, { useState } from 'react'
import { Button } from 'reactstrap';

export default function CarColorTask() {

    let [color, setColor] = useState("");
    return (
        <div>

            {
                color === "yellow" ? (
                    <h1>color is yellow</h1>) :
                    (<h1>Color is undefine</h1>)
            }

            <Button onClick={() => setColor("yellow")}>yellow</Button>
            <Button onClick={() => setColor("")}>undefine</Button>
        </div>
    )
}
