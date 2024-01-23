import { Edit, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

export default function Input1() {
    let [car, setCar] = useState('');
    let [carArr, setCarArr] = useState([]);
    let [index, setIndex] = useState(null);
    let [updateMode, setupdateMode] = useState(false);


    const getData = (e) => {
        setCar(e?.target?.value);
    };

    const addData = () => {
        if (car !== "") {
            setCarArr([...carArr, car]);
            setCar('');
        } else {
            alert("Please enter data")
        }
    };

    // delete handler

    const deleteHandler = (index) => {
        // console.log("---------->", index)
        let filterData = carArr.filter((e, i) => i !== index)
        console.log("----->", filterData);
        setCarArr(filterData);

    }

    // edit handler

    const editHandler = (data, index) => {
        console.log("---------->", data)
        setCar(data);
        setIndex(index);
        setupdateMode(true);
    }

    // update handler

    const updateHandler = () => {
        let newArr = carArr.map((e, i) => {
            if (i === index) {
                return car;
            } else {
                return e;
            }
        })
        setCarArr(newArr);
        setCar("");
        setupdateMode(false);
    }


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

                {
                    updateMode ? <Button className='w-100 mt-2' onClick={() => updateHandler()}>Update</Button> :
                        <Button onClick={() => addData()} className='w-100 mt-2'>
                            Add
                        </Button>
                }
            </div>

            <div className="w-100 d-flex align-items-center flex-column mt-4">
                {carArr.length === 0 ? (
                    <p>No data available</p>
                ) : (
                    <ol className="w-100">
                        {carArr.map((e, i) => (
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
                                            onClick={() => deleteHandler(i)}
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




            {/* <div className=' w-100 d-flex align-items-center flex-column mt-4'>
                {carArr.length === 0 ? (
                    <p>No data available</p>
                ) : (
                    <ol className='w-100 '>
                        {carArr.map((e, i) => {
                            return <li cla key={i}>{e}
                                <Edit color='gray' role='button' onClick={() => editHandler(e, i)} />
                                <Trash2 onClick={() => delethandler(i)} color='red' role='button' />
                                <hr className='mt-0' /></li>
                        })}
                    </ol>
                )}
            </div> */}
        </>
    );
}
