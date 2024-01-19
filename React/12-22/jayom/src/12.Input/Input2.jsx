import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input2() {
    let [hotel, sethotel] = useState('');
    let [hotelArr, sethotelArr] = useState([]);


    const getData = (e) => {
        sethotel(e?.target?.value);
    }

    const addData = () => {
        sethotelArr([...hotelArr, hotel]);
        sethotel('');
    }

    return (
        <>
            <h1 style={{
                color: 'blue',
            }}>Hotel</h1>
            <div className=' w-100 d-flex align-items-center flex-column mt-4'>
                <Input value={hotel} onChange={(e) => getData(e)} placeholder='Enter Hotel Name' />
                <Button onClick={() => addData()} className='w-100 mt-2'>Add</Button>
            </div >
            <div className='  w-100 d-flex align-items-center flex-column mt-4'>
                {hotelArr.length === 0 ? (
                    <p>No data available</p>
                ) :


                    <ol>
                        {
                            hotelArr.map((e, i) => {
                                return <li key={i}>{e}</li>
                            })
                        }
                    </ol>}
            </div>
        </>

    )
}
