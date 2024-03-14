import { User } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Login() {

    let [user, setUser] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const submitHandler = () => {
        localStorage.setItem("log-user", JSON.stringify(user));

        if (!user.email || !user.password) {
            alert("Please enter your Email ID and Password")
        } else {
            navigate("/profile")
        }
    }


    return (
        <div style={{ backgroundColor: "rgb(127 206 241 / 62%)" }} className='d-flex justify-content-center '>
            <Form style={{ marginTop: "70px", backgroundColor: "white", margin: "60px" }} className='w-25 border rounded-4 p-3' >
                <h1 className='mt-3'>Login</h1>
                <hr />
                <FormGroup>
                    {/* <Label for="exampleEmail">
                        Email
                    </Label> */}
                    <Input
                        id="exampleEmail"
                        placeholder="Email ID "
                        type="email"
                        style={{ borderRadius: "50px" }}
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                    />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="examplePassword">
                        Password
                    </Label> */}
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        style={{ borderRadius: "50px" }}
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e?.target?.value })}

                    />
                </FormGroup>

                <Button style={{ borderRadius: "50px" }} onClick={() => submitHandler()} color='danger' className='w-100 mb-4 '>
                    Login
                </Button>

            </Form>
        </div>
    )
}
