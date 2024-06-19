// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Button } from 'reactstrap';
// import { addUser } from '../Redux/user';

// export default function user() {

//     const dispatch = useDispatch();
//     return (
//         <div>
//             <Button onClick={() => dispatch(addUser)}>Add</Button>
//         </div>
//     )
// }

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/user";

export default function User() {
    let [name, setName] = useState();
    const dispatch = useDispatch();

    const data = useSelector((store) => {
        return store.userSlice;
    });

    const addUserHandler = () => {
        dispatch(addUser(name));
        setName("");
    };
    return (
        <div>
            <input
                value={name}
                type="text"
                className="border px-2 py-1"
                onChange={(e) => setName(e.target.value)}
            />
            <button className="border px-2 py-1" onClick={() => addUserHandler()}>
                Add
            </button>

            <hr />

            <ul>
                {data?.user.map?.((e, i) => {
                    return (
                        <div key={i}>
                            <li>{e}</li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}