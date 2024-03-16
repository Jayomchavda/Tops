import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Register() {

    let [user, setUser] = useState({ name: "", usertype: "", email: "", number: "", password: "" })

    const submitHandler = () => {
        localStorage.setItem("register-user", JSON.stringify(user));
    }


    return (
        <div className='d-flex justify-content-center '>

            <Form className='w-50 '>
                <h1>Register</h1>
                <hr />
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        placeholder="Enter your Name"
                        type="text"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Label for="usertype">
                        User Type
                    </Label>
                    <Input
                        id="usertype"
                        placeholder="Enter user type"
                        type="text"
                        value={user.usertype}
                        onChange={(e) => setUser({ ...user, usertype: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email ID
                    </Label>
                    <Input
                        id="exampleEmail"
                        placeholder="Email ID "
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Label for="number">
                        Number
                    </Label>
                    <Input
                        id="number"
                        placeholder="Email Number"
                        type="text"
                        value={user.number}
                        onChange={(e) => setUser({ ...user, number: e?.target?.value })}


                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        placeholder="Enter Password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}


                    />
                </FormGroup>

                <Button onClick={() => submitHandler()} color='danger'>
                    submit
                </Button>
            </Form>
        </div>
    )
}
