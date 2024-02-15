import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Form2() {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",

    })

    let [userArr, setUserArr] = useState([])
    let [index, setIndex] = useState("")
    let [hobby, setHobby] = useState([""])
    let [updateMode, setUpdateMode] = useState("true")

    // let [gender, setGender] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();

        if (!user.name || !user.email) {
            alert("Please Enter Your EmailID and Password")
        } else {
            setUserArr([...userArr, user])
        }

        setUser({
            name: "",
            email: "",
            password: "",
            gender: "",
        })
    }


    const checkHandler = (hby, e) => {
        if (e.target.checked) {
            setHobby([...hobby, hby]);
        } else {
            let filterData = hobby.filter((e) => e !== hby);
            setHobby(filterData);
        }
    }

    const deleteHandler = (index) => {
        let filterData = userArr.filter((e, i) => i !== index)
        setUserArr(filterData);
    }

    const editHandler = (data, index) => {
        setUser(data);
        setIndex(index);
        setUpdateMode(false);
    }

    const updateHandler = () => {
        let newData = userArr.map((e, i) => {
            if (i === index) {
                return user
            } else {
                return e
            }
        })
        setUserArr(newData);
        setUser({
            name: "",
            email: "",
            password: "",
            gender: "",
        })
        setUpdateMode(true);

    }




    return (
        <>
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="emailid">
                            Email ID
                        </Label>
                        <Input
                            id="emailid"
                            placeholder="Enter your Email ID"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Enter your Password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                        />
                    </FormGroup>

                    <h1>Gender: {user.gender}</h1>
                    <FormGroup check>
                        <Input checked={user.gender === "male"} type="radio" onChange={() => setUser({ ...user, gender: "male" })} />
                        <Label check>
                            male
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={user.gender === "female"} type="radio" onChange={() => setUser({ ...user, gender: "female" })} />
                        <Label check>
                            female
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={user.gender === "kids"} type="radio" onChange={() => setUser({ ...user, gender: "kids" })} />
                        <Label check>
                            kids
                        </Label>
                    </FormGroup>

                    <hr />

                    <h1>Hobby : {hobby}</h1>

                    <FormGroup check>
                        <Input checked={hobby.includes("cricket")} type="checkbox" onChange={(e) => checkHandler("cricket", e)} />
                        <Label check>
                            cricket
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={hobby.includes("chess")} type="checkbox" onChange={(e) => checkHandler("chess", e)} />
                        <Label check>
                            chess
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={hobby.includes("rase")} type="checkbox" onChange={(e) => checkHandler("rase", e)} />
                        <Label check>
                            rase
                        </Label>
                    </FormGroup>

                    <div>
                        {
                            hobby.map((e, i) => {
                                return <li key={i}>{e}</li>;
                            })
                        }
                    </div>


                    {
                        updateMode ? <Button onClick={(e) => submitHandler(e)} color='danger' className='w-100'>
                            Submit
                        </Button> : <Button onClick={(e) => updateHandler(e)} color='danger' className='w-100'>
                            Update
                        </Button>
                    }



                </Form>

                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                Sr.no
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Email ID
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Gender
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userArr.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e?.name}
                                        </td>
                                        <td>
                                            {e?.email}
                                        </td>
                                        <td>
                                            {e?.password}
                                        </td>
                                        <td>
                                            {e?.gender}
                                        </td>
                                        <Edit onClick={() => editHandler(e, i)} role='button' color='gray' size={40} />
                                        <Trash onClick={() => deleteHandler(i)} role='button' color='red' size={40} />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div >
        </>
    )
}
