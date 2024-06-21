import React, { useState } from 'react'
import { addCount } from '../Redux/newCountSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { addCity } from '../Redux/City';

export default function HomeNew() {
    // let [no, setNo] = useState("");
    let [name, setName] = useState("");


    let dispatch = useDispatch();

    let data = useSelector((store) => {
        return store.newCountSlice;
    });
    // console.log("data", data);

    const addUserHandler = () => {
        dispatch(addCity(name));
        setName("");
    };




    return (
        <div>
            <h1>City Count is: {data?.newCount}</h1>

            <Button onClick={() => addUserHandler()}>Add Count</Button>
            <hr />


        </div>
    )
}
