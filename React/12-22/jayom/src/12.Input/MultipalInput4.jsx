import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipalInput4() {
    let [user, setUser] = useState({
        Name: "",
        Fathername: "",
        Mothername: "",
        Brothername: "",
        Sistername: "",
    })

    let [userArr, setUserArr] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setUserArr([...userArr, user])
        setUser({
            Name: "",
            Fathername: "",
            Mothername: "",
            Brothername: "",
            Sistername: "",
        })
    }

    const deleteHandler = (index) => {
        let filterData = userArr.filter((e, i) => i !== index)
        setUserArr(filterData)

    }


    return (
        <>
            <div>
                <h1>Your Personal Details</h1>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label for="youname">
                            Your Name
                        </Label>
                        <Input
                            id="details"
                            placeholder="Enter your name"
                            type="text"
                            onChange={(e) => setUser({ ...user, Name: e?.target?.value })}
                            value={user.Name}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="father">
                            Father Name
                        </Label>
                        <Input
                            id="details"
                            placeholder="Enter Father name"
                            type="text"
                            onChange={(e) => setUser({ ...user, Fathername: e?.target?.value })}
                            value={user.Fathername}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="mother">
                            Mother Name
                        </Label>
                        <Input
                            id="details"
                            placeholder="Enter Mother name"
                            type="text"
                            onChange={(e) => setUser({ ...user, Mothername: e?.target?.value })}
                            value={user.Mothername}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Brother">
                            Brother Name
                        </Label>
                        <Input
                            id="details"
                            placeholder="Enter Brother name"
                            type="text"
                            onChange={(e) => setUser({ ...user, Brothername: e?.target?.value })}
                            value={user.Brothername}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="sister">
                            Sister Name
                        </Label>
                        <Input
                            id="details"
                            placeholder="Enter Sister name"
                            type="text"
                            onChange={(e) => setUser({ ...user, Sistername: e?.target?.value })}
                            value={user.Sistername}
                        />
                    </FormGroup>
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
                                First Name
                            </th>
                            <th>
                                Father Name
                            </th>
                            <th>
                                Mothername
                            </th>
                            <th>
                                Brothername
                            </th>
                            <th>
                                Sistername
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
                                            {e?.Name}
                                        </td>
                                        <td>
                                            {e?.Fathername}
                                        </td>
                                        <td>
                                            {e?.Mothername}
                                        </td>
                                        <td>
                                            {e?.Brothername}
                                        </td>
                                        <td>
                                            {e?.Sistername}
                                        </td>
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
