import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { addCity, deleteCity, updateCity } from '../Redux/City';

export default function City() {
    const [city, setCity] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const dispatch = useDispatch();
    const data = useSelector((store) => store.citySlice);

    const addHandler = () => {
        if (city.trim() !== "") {
            dispatch(addCity(city));
            setCity("");
        }
    };

    const deleteHandler = (i) => {
        dispatch(deleteCity(i));
        setCity("");
    };

    const editHandler = (name, index) => {
        setCity(name);
        setEditIndex(index);
    };

    const updateHandler = () => {
        if (city.trim() !== "") {
            if (editIndex !== null) {
                dispatch(updateCity({ index: editIndex, newName: city }));
                setEditIndex(null);
            }
            setCity("");
        }
    };



    return (
        <div>
            <input
                value={city}
                type="text"
                onChange={(e) => setCity(e.target.value)}
            />

            {editIndex !== null ? (
                <Button color="success" onClick={updateHandler}>
                    Update City
                </Button>
            ) : (
                <Button onClick={addHandler}>Add City</Button>
            )}
            <ul>
                {data?.City?.map((e, i) => (
                    <div key={i}>
                        <li>
                            {e}
                            <Button onClick={() => editHandler(e, i)}>Edit</Button>
                            <Button color="danger" onClick={() => deleteHandler(i)}>Delete</Button>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
