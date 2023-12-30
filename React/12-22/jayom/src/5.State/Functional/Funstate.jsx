import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function Funstate() {
    let [count, setcount] = useState(50);
    let [data, setdata] = useState({ amount: 50000, point: 5 });
    let x = 10

    const incx = () => {
        x++;
        console.log("x---->", x)
    }

    const inccount = () => {
        setcount(count + 1)
    }

    const incamount = () => {
        setdata({ amount: data.amount + 1 });
    }

    const incPoint = () => {
        setdata({ point: data.point + 1 });
    }
    return (
        <div className='text-center '>
            <h1>x is {x}</h1>
            <Button color="danger" onClick={incx}>INC X</Button>

            <hr />

            <h1>Count is {count}</h1>
            <Button color="danger" onClick={inccount}>INC COUNT</Button>

            <hr />

            <h1>Count-2 is {data.amount}</h1>
            <Button color="danger" onClick={incamount}>INC AMOUNT</Button>

            <hr />
            <h1>Point is {data?.point}</h1>
            <Button color="danger" onClick={incPoint}> INC POINT </Button>

        </div>
    )
}
