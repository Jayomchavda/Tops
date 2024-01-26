import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input4() {
    let [bike, setBike] = useState("");
    let [bikeArr, setBikeArr] = useState([]);
    let [index, setIndex] = useState("");
    let [updateMode, setUpdateMode] = useState(false)


    const getData = (e) => {
        setBike(e?.target?.value);
    }

    const addData = () => {
        if (bike !== "") {
            setBikeArr([...bikeArr, bike]);
            setBike("");
        } else {
            alert("Enter bike name");
        }
    }

    //delete data
    const deleteHandler = (index) => {
        let filternewArr = bikeArr.filter((e, i) => i !== index)
        setBikeArr(filternewArr);
    }

    //edit data
    const editHandler = (data, index) => {
        setBike(data);
        setIndex(index);
        setUpdateMode(true);
    }

    //update data
    const updateHandler = () => {
        let newArr = bikeArr.map((e, i) => {
            if (i === index) {
                return bike;
            } else {
                return e
            }
        })
        setBikeArr(newArr)
        setBike("");
        setUpdateMode(false);
    }




    return (
        <>
            <div>
                <h1 style={{ color: "blue" }}>Bike</h1>
                <h1>{bike}</h1>
                <Input value={bike} onChange={(e) => getData(e)} placeholder='Enter Bike Name...' />


                {
                    updateMode ? <Button onClick={() => updateHandler()} className='w-100 mt-2 '>Update</Button> : <Button onClick={() => addData()} color='danger' className='w-100 mt-2 '>Add</Button>
                }


            </div>


            <div>
                <ol>
                    {
                        bikeArr.map((e, i) => {
                            return <li key={i}>{e}
                                <Edit onClick={() => editHandler(e, i)} color='gray' role='button' />
                                <Trash2 onClick={() => deleteHandler(i)} color='red' role='button' />
                            </li>

                        })
                    }
                </ol>
            </div>
        </>
    )
}
