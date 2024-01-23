import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input3() {
    let [name, setname] = useState("");
    let [nameArr, setnameArr] = useState([]);
    let [index, setIndex] = useState("");
    let [updateMode, setUpdateMode] = useState(false)

    const getData = (e) => {
        setname(e?.target?.value)
    }

    const addData = () => {
        if (name !== "") {
            setnameArr([...nameArr, name]);
            setname("");
        } else {
            alert("Please Enter data");
        }
    }

    // Edit
    const editHandler = (data, index) => {
        setname(data);
        setIndex(index);
        setUpdateMode(true);
    }

    // delete 
    const deleteHandler = (index) => {
        let filterData = nameArr.filter((e, i) => i !== index)
        setnameArr(filterData);
    }

    // Update

    const updateHandler = () => {
        let newArr = nameArr.map((e, i) => {
            if (i === index) {
                return name;
            } else {
                return e;
            }
        })
        setnameArr(newArr);
        setname("");
        setUpdateMode(false);


    }





    return (
        <>
            <div>
                <h1>{name}</h1>
                <Input onChange={(e) => getData(e)} placeholder='Enter your name' value={name} />

                {
                    updateMode ? <Button onClick={() => updateHandler()} className='w-100 mt-1 '>Update</Button> : <Button onClick={() => addData()} color='danger' className='w-100 mt-3 ' >Add</Button>
                }


            </div>

            <div>
                <ol>
                    {
                        nameArr.map((e, i) => {
                            return <><li className='mt-2' key={i}>{e}<Edit onClick={() => editHandler(e, i)} color='gray' role='button' />
                                <Trash2 onClick={() => deleteHandler(i)} color='red' role='button' />
                            </li>
                                <hr />
                            </>
                        })
                    }
                </ol>
            </div >
        </>
    )
}
