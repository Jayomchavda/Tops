import React from 'react'
import { useSelector } from 'react-redux';

export default function ComA1() {

    let data = useSelector((store) => {
        return store.COUNT;
    });


    return (
        <h1>Count is {data.count}</h1>
    )
}
