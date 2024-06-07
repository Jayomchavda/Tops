import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap';
import { Edit, Trash } from 'lucide-react';

export default function Form2() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
    });

    const [userArr, setUserArr] = useState([]);
    const [index, setIndex] = useState("");
    const [hobby, setHobby] = useState([""]);
    const [updateMode, setUpdateMode] = useState(true);
    const [userType, setUserType] = useState("");



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userArr'));
        if (storedData) {
            setUserArr(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userArr', JSON.stringify(userArr));
    }, [userArr]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!user.name || !user.email) {
            alert("Please Enter Your Email ID and Password");
        } else {
            setUserArr([...userArr, { ...user, userType }]);
        }

        setUser({
            name: "",
            email: "",
            password: "",
            gender: "",
        });
    };

    const checkHandler = (hby, e) => {
        if (e.target.checked) {
            setHobby([...hobby, hby]);
        } else {
            let filterData = hobby.filter((item) => item !== hby);
            setHobby(filterData);
        }
    };

    const deleteHandler = (index) => {
        let filterData = userArr.filter((_, i) => i !== index);
        setUserArr(filterData);
    };

    const editHandler = (data, index) => {
        setUser(data);
        setIndex(index);
        setUpdateMode(false);
    };

    const updateHandler = () => {
        let newData = userArr.map((e, i) => {
            if (i === index) {
                return { ...user, userType };
            } else {
                return e;
            }
        });
        setUserArr(newData);
        setUser({
            name: "",
            email: "",
            password: "",
            gender: "",
        });
        setUpdateMode(true);
    };

    return (
        <>
            <div>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="emailid">Email ID</Label>
                        <Input
                            id="emailid"
                            placeholder="Enter your Email ID"
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            placeholder="Enter your Password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </FormGroup>

                    <h4>Gender: {user.gender}</h4>
                    <FormGroup check>
                        <Input checked={user.gender === "male"} type="radio" onChange={() => setUser({ ...user, gender: "male" })} />
                        <Label check>male</Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={user.gender === "female"} type="radio" onChange={() => setUser({ ...user, gender: "female" })} />
                        <Label check>female</Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={user.gender === "kids"} type="radio" onChange={() => setUser({ ...user, gender: "kids" })} />
                        <Label check>kids</Label>
                    </FormGroup>

                    <hr />

                    <h4>Hobby : {hobby}</h4>

                    <FormGroup check>
                        <Input checked={hobby.includes("cricket")} type="checkbox" onChange={(e) => checkHandler("cricket", e)} />
                        <Label check>cricket</Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={hobby.includes("chess")} type="checkbox" onChange={(e) => checkHandler("chess", e)} />
                        <Label check>chess</Label>
                    </FormGroup>

                    <FormGroup check>
                        <Input checked={hobby.includes("football")} type="checkbox" onChange={(e) => checkHandler("football", e)} />
                        <Label check>Football</Label>
                    </FormGroup>

                    <FormGroup>
                        <Label for="userType">UserType</Label>
                        <select id="userType" className='m-lg-2' onChange={(e) => setUserType(e.target.value)}>
                            <option value="">---Select---</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </FormGroup>

                    <div>
                        {hobby.map((item, i) => <li key={i}>{item}</li>)}
                    </div>

                    {updateMode ?
                        <Button onClick={submitHandler} color='danger' className='w-100'>Submit</Button> :
                        <Button onClick={updateHandler} color='danger' className='w-100'>Update</Button>
                    }
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <th>Sr.no</th>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>User Type</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userArr.map((e, i) => (
                            <tr key={i}>
                                <td>
                                    {i + 1}
                                </td>
                                <td>
                                    {e.name}
                                </td>
                                <td>
                                    {e.email}
                                </td>
                                <td>
                                    {e.password}
                                </td>
                                <td>
                                    {e.gender}
                                </td>
                                <td>
                                    {e.userType}
                                </td>
                                <td>
                                    <Edit onClick={() => editHandler(e, i)} role='button' color='gray' size={25} />
                                </td>
                                <td>
                                    <Trash onClick={() => deleteHandler(i)} role='button' color='red' size={25} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
