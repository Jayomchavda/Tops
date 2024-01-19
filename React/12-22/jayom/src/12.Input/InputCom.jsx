import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function InputCom() {
    let [task, settask] = useState("");
    let [taskarr, settaskarr] = useState([]);

    const getdata = (e) => {
        // console.log("-------")
        settask(e?.target.value);
    }

    const adddata = () => {
        settaskarr([...taskarr, task])
        settask("");
    };



    return (
        <>
            <div className='w-100  d-flex align-items-center flex-column mt-4'>
                <Input value={task} placeholder='Enter Your Name' onChange={(e) => getdata(e)} />
                <Button className='mt-2' onClick={() => adddata()}>add</Button>
            </div>

            <div className=' w-100  d-flex align-items-center flex-column mt-4' >
                <ol>{taskarr.map((e, i) => {
                    return <li key={i}>{e} </li>

                })}</ol>
            </div>
        </>
    )
}
