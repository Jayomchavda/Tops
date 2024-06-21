import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { addCity, deleteCity, editCity } from '../Redux/City';

export default function City() {
    let [city, setCity] = useState("");
    let [index, setIndex] = useState("")
    let [cityArr, setCityArr] = useState([])

    const [editIndex, setEditIndex] = useState(null);


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
        setCity("");
    }

    const editHandler = () => {
        setCity(data.City);
        console.log("dataa", data);
    }
    // const updateHandler = (i) => {
    //     dispatch(editCity({ index: i, newName: city }));
    //     setCity("");
    // }


    // const updateHandler = (i) => {
    //     let newData = cityArr.map((e, i) => {
    //         if (i === index) {
    //             return city
    //         } else {
    //             return e
    //         }
    //     })
    //     setCityArr(newData);
    // }








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
                            <li className=''>{e}
                                <Button onClick={() => editHandler()}>Edit </Button>
                                <Button color='danger' onClick={() => deleteHandler(i)}>Delete</Button>
                                <Button color="success" onClick={() => updateHandler()}>Update </Button>

                            </li>
                        </div>
                    )
                })
                }
            </ul>

        </div>
    )
}
