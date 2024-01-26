import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input6() {
    let [school, setSchool] = useState("")
    let [schoolArr, setSchoolArr] = useState([])
    let [index, setIndex] = useState("");
    let [updateMode, setUpdateMode] = useState(false)


    const getData = (e) => {
        setSchool(e?.target.value);
    }

    const addData = () => {
        if (school !== "") {
            setSchoolArr([...schoolArr, school])
            setSchool("")
        } else {
            alert("Please enter school name")
        }
    }

    // delete
    const deleteHandler = (index) => {
        let filterData = schoolArr.filter((e, i) => i !== index)
        setSchoolArr(filterData);
    }

    // edit
    const editHandler = (data, index) => {
        setSchool(data);
        setIndex(index);
        setUpdateMode(true);
    }

    // update

    const updateHandler = () => {
        let newArr = schoolArr.map((e, i) => {
            if (i === index) {
                return school
            } else {
                return e
            }
        })
        setSchoolArr(newArr);
        setSchool("");
        setUpdateMode(false);

    }


    return (
        <>
            <div>
                <h1>{school}</h1>
                <Input value={school} onChange={(e) => getData(e)} placeholder='Enter school name...' />

                {
                    updateMode ? <Button onClick={() => updateHandler()} className='w-100 mt-2 '>Update</Button> : <Button onClick={() => addData()} color='danger' className='w-100 mt-2 '>Add</Button>
                }
            </div>

            <div>
                <ol>
                    {
                        schoolArr.map((e, i) => {
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
