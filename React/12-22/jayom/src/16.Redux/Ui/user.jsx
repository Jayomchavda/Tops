import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../Redux/user";
import { Button } from "reactstrap";

export default function User() {
    let [name, setName] = useState("");

    const dispatch = useDispatch();

    const data = useSelector((store) => {
        return store.userSlice;
    });


    const addUserHandler = () => {
        dispatch(addUser(name));
        setName("");
    };

    const deleteHandler = (i) => {
        dispatch(deleteUser(i));
    }

    return (
        <div>
            <hr />
            <input
                value={name}
                type="text"
                className="border px-2 py-1"
                onChange={(e) => setName(e?.target?.value)}
            />
            <Button className="border px-2 py-1" onClick={() => addUserHandler()}>
                Add
            </Button>



            <ul>
                {data?.user?.map?.((e, i) => {
                    console.log("e", e)
                    return (
                        <div key={i}>
                            <li>{e} <Button onClick={() => deleteHandler(i)} >Delete</Button>
                                <Button>Edit </Button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}