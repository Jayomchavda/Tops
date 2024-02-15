import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipalInput1() {

    let [user, setUser] = useState({
        email: "",
        password: "",
    })


    let [userArr, setUserArr] = useState([])

    const submitHandler = (e) => {

        e.preventDefault();
        setUserArr([...userArr, user])
        setUser({
            email: "",
            password: "",
        })

    }







    return (
        <>
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter your mail"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                        />
                    </FormGroup>

                    <Button onClick={(e) => submitHandler(e)} color='danger' className='w-100'>
                        Submit
                    </Button>
                </Form>

                <Table className='mt-3'
                >
                    <thead>
                        <tr>
                            <th>
                                Sr.no
                            </th>
                            <th>
                                Email ID
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
                                            {e?.email}
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
        </>

    )
}
