import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'reactstrap'

export default function UseEffectTask() {
    let [count, setcount] = useState(0)
    let [count2, setcount2] = useState(0)
    let [count3, setcount3] = useState(0)

    useEffect(() => {
        if (count === 10) {
            alert("count is 10")
        }

    }, [count])


    useEffect(() => {
        if (count2 === 10) {
            alert("count2 is 10")
        }

    }, [count2])

    useEffect(() => {
        if (count === count2) {
            alert("Both are Same ")
        }

    }, [count, count2])

    return (
        <div>

            {/* {
                this.state.count === 10
            } */}

            <h1>Count is {count}</h1>
            <Button color='danger' onClick={() => setcount(count + 1)}>inc</Button>
            <hr />
            <h1>Count is {count2}</h1>
            <Button color='danger' onClick={() => setcount2(count2 + 1)}>inc</Button>
            <hr />
            <h1>Count is {count3}</h1>
            <Button color='danger' onClick={() => setcount3(count3 + 1)}>inc</Button>
        </div>
    )
}
