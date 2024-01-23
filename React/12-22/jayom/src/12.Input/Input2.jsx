import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input2() {
    let [hotel, sethotel] = useState('');
    let [hotelArr, sethotelArr] = useState([]);
    let [index, setIndex] = useState(null);
    let [updateMode, setupdateMode] = useState(false);


    const getData = (e) => {
        sethotel(e?.target?.value);
    }

    const addData = () => {
        if (hotel !== "") {
            sethotelArr([...hotelArr, hotel]);
            sethotel('');
        } else {
            alert("Please enter data")
        }
    };


    // delete handler
    const deletHandler = (index) => {
        // console.log("---------->", index)
        let filterData = hotelArr.filter((e, i) => i !== index)
        console.log("----->", filterData);
        sethotelArr(filterData);

    }
    // edit handler
    const editHandler = (data, index) => {
        // console.log("---------->", data)
        sethotel(data);
        setIndex(index);
        setupdateMode(true);
    }


    // update handler
    const updateHandler = () => {
        let newArr = hotelArr.map((e, i) => {
            if (i === index) {
                return hotel;
            } else {
                return e;
            }
        })
        sethotelArr(newArr);
        sethotel("");
        setupdateMode(false);
    }


    return (
        <>
            <h1 style={{
                color: 'blue',
            }}>Hotel</h1>

            <div className=' w-100 d-flex align-items-center flex-column mt-4'>
                <Input value={hotel} onChange={(e) => getData(e)} placeholder='Enter Hotel Name' />

                {
                    updateMode ? (<Button className='w-100 mt-2' onClick={() => updateHandler()}>Update</Button>) : (
                        <Button onClick={() => addData()} className='w-100 mt-2'>
                            Add
                        </Button>)
                }
            </div >

            <div className="w-100 d-flex align-items-center flex-column mt-4">
                {hotelArr.length === 0 ? (
                    <p>No data available</p>
                ) : (
                    <ol className="w-100">
                        {hotelArr.map((e, i) => (
                            <>
                                <li key={i} className="d-flex justify-content-between align-items-center">
                                    <span>{`${i + 1}. ${e}`}</span>
                                    <div>
                                        <Edit
                                            color="gray"
                                            role="button"
                                            onClick={() => editHandler(e, i)}
                                        />
                                        <Trash2
                                            onClick={() => deletHandler(i)}
                                            color="red"
                                            role="button"
                                        />
                                    </div>
                                </li>
                                <hr />
                            </>
                        ))}
                    </ol>
                )}
            </div>


            {/* <div className='  w-100 d-flex align-items-center flex-column mt-4'>
                    {hotelArr.length === 0 ? (
                        <p>No data available</p>
                    ) : 
                    < ol >
                    {
                        hotelArr.map((e, i) => {
                            return <li key={i}>{e}</li>
                        })
                    }
                        </>}
            </div > */}
        </>

    )

}

