import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const newData = {
    name: "",
    email: "",
    password: "",
    hobby: [],
    userType: "",
    gender: "",
    phone: "",
};

const options = [
    { label: "Strong", value: "strong" },
    { label: "Woodi", value: "woodi" },
    { label: "Aqua", value: "aqua" },
    { label: "Light", value: "light" },
    { label: "Cold", value: "cold" },
];

export default function Form4() {
    const [data, setData] = useState(newData);
    const [userArr, setUserArr] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('userArr');
        if (storedData) {
            setUserArr(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userArr', JSON.stringify(userArr));
    }, [userArr]);

    const submitHandler = () => {
        console.log("newdata0------>", data);
        setUserArr([...userArr, data]);
        setData(newData);
    }

    const multiSelectHandler = (e) => {
        let hobbies = e.map((e) => e.value);
        setData({ ...data, hobby: hobbies });
    };

    return (
        <Form>
            <FormGroup>
                <Label for="examplename">
                    Name
                </Label>
                <Input
                    id="examplename"
                    name="name"
                    placeholder="Enter your Name"
                    type="text"
                    value={data.name}
                    onChange={(e) =>
                        setData({ ...data, name: e?.target?.value })
                    }
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your email ID"
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e?.target?.value })
                    }
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
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e?.target?.value })
                    }
                />
            </FormGroup>
            <FormGroup>
                <Label for="description">Hobby</Label>
                <ReactSelect
                    isMulti
                    className="w-[300px]"
                    options={options}
                    value={data?.hobby?.map?.((e) => {
                        return { label: e.toUpperCase(), value: e };
                    })}
                    onChange={(e) => multiSelectHandler(e)}
                />
            </FormGroup>

            <FormGroup>
                <Label for="exampleUserType">
                    UserType
                </Label>
                <select
                    className='w-100'
                    id="exampleUserType"
                    value={data.userType}
                    onChange={(e) =>
                        setData({ ...data, userType: e?.target?.value })
                    }
                >
                    <option value="">Select</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </FormGroup>

            <FormGroup className='mt-2'>
                <label htmlFor="">Gender :</label>
                <div className='mt-2'>
                    <Input
                        name="radio1"
                        type="radio"
                        checked={data?.gender === "male"}
                        onChange={() =>
                            setData({ ...data, gender: "male" })
                        }
                    />
                    <Label>
                        Male
                    </Label>
                </div>

                <Input
                    name="radio1"
                    type="radio"
                    checked={data?.gender === "female"}
                    onChange={(e) =>
                        setData({ ...data, gender: "female" })
                    }
                />
                <Label>
                    Female
                </Label>
            </FormGroup>

            <FormGroup>
                <Label for="examplePhone">
                    Phone number
                </Label>
                <Input
                    id="examplePhone"
                    placeholder="Enter your Phone number"
                    type="text"
                    value={data.phone}
                    onChange={(e) =>
                        setData({ ...data, phone: e?.target?.value })
                    }
                />
            </FormGroup>

            <Button className='mt-2 w-50 my-3' onClick={submitHandler}>
                Submit
            </Button>
        </Form>
    )
}
