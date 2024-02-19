import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function UserCrud() {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    })

    let [userArr, setUserArr] = useState([])
    let [gender, setGender] = useState("")


    const submitHandler = (e) => {

        if (!user.email || !user.password) {
            alert("Please enter youe Email ID and Password")
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
    return (
        <div>
            <Form className='mt-5'>
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
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        placeholder="Enter Your Email ID"
                        type="text"
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
                        placeholder="Enter Your Password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                    />
                </FormGroup>

                <h1>Gender:{user.gender}</h1>
                <FormGroup className='d-flex justify-content-md-start'>
                    <Input checked={user.gender === "male"}
                        type="radio"
                        onChange={() => setUser({ ...user, gender: "male" })}
                    />
                    <Label check>
                        Male
                    </Label>
                </FormGroup>

                <FormGroup className='d-flex justify-content-md-start'>
                    <Input checked={user.gender === "female"}
                        type="radio"
                        onChange={() => setUser({ ...user, gender: "female" })}
                    />
                    <Label check>
                        Female
                    </Label>
                </FormGroup>

                <FormGroup className='d-flex justify-content-md-start'>
                    <Input checked={user.gender === "kids"}
                        type="radio"
                        onChange={() => setUser({ ...user, gender: "kids" })}
                    />
                    <Label check>
                        Kids
                    </Label>
                </FormGroup>

                <hr />

                {/* ===========     checkbox     ============== */}

                <FormGroup className='d-flex justify-content-md-start' >
                    <Input type="checkbox" />
                    <Label check>
                        Cricket
                    </Label>
                </FormGroup>
            </Form>

            <Button onClick={(e) => submitHandler(e)} color='danger' className='w-25'>
                Submit
            </Button>


            <Table className='mt-5'
            >
                <thead>
                    <tr>
                        <th>
                            Sr.no
                        </th>
                        <th>
                            First Name
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
                        <th>
                            Hobby
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userArr.map((e, i) => {
                            return (
                                <tr>
                                    <th key={i} scope="row">
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
                                    <td>
                                        {e?.hobby}
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
