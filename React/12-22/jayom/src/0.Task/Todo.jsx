import { Check, Edit, Trash, Undo2 } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Todo() {
    let [task, setTask] = useState("")
    let [pendingTask, setPendingTask] = useState([]);
    let [doneTask, setDoneTask] = useState([]);

    const taskEvent = (e) => {
        setTask(e.target.value)
    }

    const addCon = () => {
        setPendingTask((oldtask) => {
            return [...oldtask, task]
        })
        setTask("");
    }

    const movedone = (index, e) => {
        setDoneTask([...doneTask, e]);

        setPendingTask((oldPendingTasks) => {
            return oldPendingTasks.filter((_, i) => i !== index);
        });
    };

    return (
        <div className='w-25 mt-3 '>
            <Input
                onChange={taskEvent}
                value={task}
                placeholder='Enter Your name' />
            <Button onClick={addCon} color='danger' className='mt-2 w-100'>Add</Button>

            <div style={{ border: "1px solid black" }} className='mt-3'>
                <h1 className='text-center'>Pending Task</h1>
                <div>
                    <ol >
                        {pendingTask.map((e, i) => {
                            return <li>
                                <span className='d-flex justify-content-between'>
                                    <p class="m-0">{e}</p>
                                    <p class="m-0"><Edit color='blue' />
                                        <Check onClick={() => movedone(i, e)} color="#00ff1e" role='button' />
                                    </p>
                                </span>
                            </li>
                        })}
                    </ol>
                </div>
            </div>

            <div style={{ border: "1px solid black" }} className='mt-3'>
                <h1 className='text-center'>Done Task</h1>
                <ol>
                    {doneTask.map((doneTaskvalue, index) => {
                        return <li key={index}>{doneTaskvalue}
                            <Undo2 />
                        </li>
                    })}
                </ol>

            </div>

        </div>
    )
}
