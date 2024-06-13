import React, { useContext } from "react";
import { UserContext } from "./UseContaxt";

export default function ComA3({ name }) {
    console.log("-----------  name-a3----------->", name);
    let { age, setTask } = useContext(UserContext);
    console.log("-----------  data----------->", { age });



    return (
        <div>

            {/* take input and set value in task here */}
            {/* <input type="text" onChange={(e) => setTask(e.target.value)} placeholder="Enter task" /> */}

            <h1>My name is {name}</h1>
            <h3>And I am {age} years old</h3>
            <input
                type="text"
                onChange={(e) => setTask(e?.target?.value)}
                placeholder="Enter task"
            />

        </div>
    );
}