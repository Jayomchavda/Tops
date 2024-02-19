import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function UserCrud() {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobby: [],
    })

    let [userArr, setUserArr] = useState([])
    // let [gender, setGender] = useState("")
    let [index, setIndex] = useState("")
    let [upadtemode, setUpdatemode] = useState("false")


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
            hobby: [],
        })
    }

    const checkHandler = (hby, e) => {
        if (e.target.checked) {
            setUser({ ...user, hobby: [...user.hobby, hby] })
        } else {
            let filterData = user.hobby.filter((e) => e !== hby)
            setUser({ ...user, hobby: filterData })
        }
    };

    const deleteHandler = (index) => {
        let filterData = userArr.filter((e, i) => i !== index)
        setUserArr(filterData)
    }

    const editHandler = (data, index) => {
        setUser(data);
        setIndex(index)
        setUpdatemode(false)
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
            hobby: [],
        })
        setUpdatemode(true);
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
                    <Input checked={user.hobby.includes("cricket")}
                        onChange={(e) => checkHandler("cricket", e)}
                        type="checkbox" />
                    <Label >
                        Cricket
                    </Label>
                </FormGroup>

                <FormGroup className='d-flex justify-content-md-start' >
                    <Input checked={user.hobby.includes("chess")}
                        onChange={(e) => checkHandler("chess", e)}
                        type="checkbox" />
                    <Label >
                        Chess
                    </Label>
                </FormGroup>

                <FormGroup className='d-flex justify-content-md-start' >
                    <Input checked={user.hobby.includes("hockey")}
                        onChange={(e) => checkHandler("hockey", e)}
                        type="checkbox" />
                    <Label >
                        Hockey
                    </Label>
                </FormGroup>
            </Form>

            {
                upadtemode ? <Button onClick={(e) => submitHandler(e)} color='danger' className='w-25'>
                    Submit
                </Button> : <Button onClick={(e) => updateHandler(e)} color='danger' className='w-25'>
                    Update
                </Button>

            }




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
                                        {e?.hobby.map((hby) => {
                                            return (
                                                <div className='"d-flex gap-2 align-items-center"'>
                                                    <li className="list-unstyled">{hby}</li>
                                                </div>
                                            )
                                        })}
                                    </td>
                                    <Edit onClick={() => editHandler(e, i)} color='gray' size={40} />
                                    <Trash onClick={() => deleteHandler(i)} role='button' color='red' size={40} />
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}
