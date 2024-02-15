import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import CheckBox2 from './CheckBox2'

export default function Form1() {
    let [gender, setGender] = useState("")

    let [user, setUser] = useState({
        name: "",
        emailid: "",
        password: "",
    })

    let [userArr, setUserArr] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();

        if (!user.emailid || !user.password) {
            alert("Please Enter Your EmailID and Password")
        } else {
            setUserArr([...userArr, user])
        }

        setUser({
            name: "",
            emailid: "",
            password: "",

        })
    }


    return (
        <div>
            <h1>Your Details</h1>

            <Form onSubmit={(e) => submitHandler(e)}>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        placeholder="Enter Your Name"
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        placeholder="Enter Email ID"
                        type="email"
                        value={user.emailid}
                        onChange={(e) => setUser({ ...user, emailid: e?.target?.value })}

                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        placeholder="Enter Your Password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                    />
                </FormGroup>

                <h1>Gender:{gender}</h1>
                <FormGroup check>
                    <Input checked={gender === "male"} type="radio" onChange={() => setGender("male")} />
                    <Label check>
                        male
                    </Label>

                </FormGroup>

                <FormGroup check>
                    <Input checked={gender === "female"} type="radio" onChange={() => setGender("female")} />
                    <Label check>
                        female
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={gender === "kids"} type="radio" onChange={() => setGender("kids")} />
                    <Label check>
                        kids
                    </Label>
                </FormGroup>

                <hr />
                <CheckBox2 />


                <Button onClick={(e) => submitHandler(e)} color='danger' className='w-100'>
                    Submit
                </Button>
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
                            Email id
                        </th>
                        <th>
                            Password
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        userArr.map((e, i) => {
                            return (


                                <tr>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e?.name}
                                    </td>
                                    <td>
                                        {e?.emailid}
                                    </td>
                                    <td>
                                        {e?.password}
                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
