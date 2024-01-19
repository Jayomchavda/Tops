import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

export default function Input1() {
    const [car, setCar] = useState('');
    const [carArr, setCarArr] = useState([]);

    const getData = (e) => {
        setCar(e?.target?.value);
    };

    const addData = () => {
        setCarArr([...carArr, car]);
        setCar('');
    };



    return (
        <>
            <h1 style={{
                color: 'red',
            }}>Car</h1>
            {/* <h1>{car}</h1> */}

            <div className='w-100  d-flex align-items-center flex-column mt-4'>
                <Input
                    onChange={(e) => getData(e)}
                    value={car}
                    placeholder='Enter Car Name'
                    key='carInput'
                />
                <Button onClick={() => addData()} className='w-100 mt-2'>
                    Add
                </Button>
            </div>

            <div className=' w-100 d-flex align-items-center flex-column mt-4'>
                {carArr.length === 0 ? (
                    <p>No data available</p>
                ) : (
                    <ol>
                        {carArr.map((e, i) => {
                            return <li key={i}>{e}</li>
                        })}
                    </ol>
                )}
            </div>
        </>
    );
}
