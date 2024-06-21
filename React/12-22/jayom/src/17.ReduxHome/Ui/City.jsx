import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { addCity, deleteCity } from '../Redux/City';

export default function City() {
    let [city, setCity] = useState("");

    const dispatch = useDispatch();

    const data = useSelector((store) => {
        return store.citySlice
    });
    // console.log("alldata", data);

    const addHandler = () => {
        dispatch(addCity(city))
        setCity("");
    }


    const deleteHandler = (i) => {
        dispatch(deleteCity(i));
    }


    return (
        <div>
            <input
                value={city}
                type="text"
                onChange={(e) => setCity(e?.target?.value)}
            />

            <Button onClick={() => addHandler()}>Add City</Button>

            <ul>
                {data?.City?.map?.((e, i) => {
                    // console.log("e", e)
                    return (
                        <div key={i} >
                            <li>{e} <Button onClick={() => deleteHandler(i)}>Delete</Button></li>
                        </div>
                    )
                })
                }
            </ul>

        </div>
    )
}
