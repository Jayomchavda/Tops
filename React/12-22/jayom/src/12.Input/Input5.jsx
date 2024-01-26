import { Edit, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Input5() {
    let [data, setData] = useState("")
    let [dataArr, setDataArr] = useState([])
    let [index, setIndex] = useState("")
    let [updateMode, setUpdateMode] = useState(false)


    const getData = (e) => {
        setData(e?.target?.value)
    }

    const addData = () => {
        if (data !== "") {
            setDataArr([...dataArr, data])
            setData("")
        } else {
            alert("please enter data")
        }
    }

    // Delete handler
    const deleteHandler = (index) => {
        let filterData = dataArr.filter((e, i) => i !== index)
        setDataArr(filterData);
    }

    // edit handler
    const editHandler = (data, index) => {
        setData(data);
        setIndex(index);
        setUpdateMode(true);
    }

    //update handler
    const updateHandler = () => {
        let newArr = dataArr.map((e, i) => {
            if (i === index) {
                return data;
            } else {
                return e;
            }
        })
        setDataArr(newArr);
        setData("");
    }





    return (
        <>
            <div>
                <Input onChange={(e) => getData(e)} placeholder='Enter your data' value={data} />


                {
                    updateMode ? <Button onClick={() => updateHandler()} color='danger w-100 mt-2'>Update</Button> : <Button onClick={() => addData()} color='danger w-100 mt-2'>Add</Button>
                }



            </div>

            <div>
                <ol>
                    {
                        dataArr.map((e, i) => {
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
