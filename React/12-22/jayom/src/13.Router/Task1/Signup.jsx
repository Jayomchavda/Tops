import { User } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, } from 'reactstrap'

export default function Signup() {
    let [user, setUser] = useState({
        firstname: "", lastname: "", email: "", phonenumber: "", password: ""
    });

    const submithandler = () => {
        localStorage.setItem("signup-user", JSON.stringify(user))
    }


    return (
        <div style={{ backgroundColor: "rgb(127 206 241 / 62%)" }} className='w-100 d-flex justify-content-center  ' >
            <Form style={{ backgroundColor: "white", border: "2px solid white", padding: "20px", margin: "20px" }} className='w-25 mt-4  rounded-3  '>
                <h1 style={{ color: "red" }}> Sign Up</h1>
                <hr />
                <FormGroup>
                    <Input
                        id="fname"
                        placeholder="First Name"
                        type="text"
                        value={user.firstname}
                        onChange={(e) => setUser({ ...user, firstname: e?.target?.value })}

                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="lname"
                        placeholder="Last Name"
                        type="text"
                        value={user.lastname}
                        onChange={(e) => setUser({ ...user, lastname: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="email"
                        placeholder="Email ID"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="number"
                        placeholder="Phone Number"
                        type="text"
                        value={user.phonenumber}
                        onChange={(e) => setUser({ ...user, phonenumber: e?.target?.value })}


                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                    />
                </FormGroup>

                <Button onClick={() => submithandler()} color='danger' className='w-100 mt-4'>Sign Up</Button>

            </Form>
        </div >
    )
}
