import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Edit, Trash } from "lucide-react";

const hobbies = [
    { label: "Sports", value: "sports" },
    { label: "Reading", value: "reading" },
    { label: "Music", value: "music" },
    { label: "Traveling", value: "traveling" },
    { label: "Movie", value: "movie" },
];

const userTypes = [
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
];

export default function CrudPractice3() {
    const [hobbyArr, setHobbyArr] = useState(["sports", "reading"]);
    const [userType, setUserType] = useState("user");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobby: hobbyArr,
        userType: userType,
    });

    const [userArr, setUserArr] = useState([]);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUserArr(storedUsers);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(userArr));
    }, [userArr]);

    const validateForm = () => {
        if (user.name.trim() === "") {
            toast.warn("Please enter your name");
            return false;
        }
        if (user.email.trim() === "") {
            toast.warn("Please enter your email");
            return false;
        }
        if (user.password.trim() === "") {
            toast.warn("Please enter your password");
            return false;
        }
        if (user.gender.trim() === "") {
            toast.warn("Please select your gender");
            return false;
        }
        return true;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (index !== null) {
                updateHandler();
            } else {
                setUserArr([...userArr, user]);
            }
            setUser({
                name: "",
                email: "",
                password: "",
                gender: "",
                hobby: hobbyArr,
                userType: userType,
            });
            setIndex(null);
            toast.success("User submitted successfully");
        }
    };

    const deleteHandler = (index) => {
        setUserArr(userArr.filter((_, i) => i !== index));
    };

    const editHandler = (data, index) => {
        setUser(data);
        setIndex(index);
    };

    const updateHandler = () => {
        const newArr = userArr.map((e, i) => {
            if (i === index) {
                return user;
            } else {
                return e;
            }
        });
        setUserArr(newArr);
    };

    const singleSelectHandler = (selectedOption) => {
        setUserType(selectedOption.value);
        setUser({ ...user, userType: selectedOption.value });
    };

    const multiSelectHandler = (selectedOptions) => {
        const data = selectedOptions.map((item) => item.value);
        setHobbyArr(data);
        setUser({ ...user, hobby: data });
    };

    return (

        <div className="border w-50 p-5">
            <h1 className="text-center">Form</h1>
            <Form onSubmit={submitHandler}>
                <FormGroup className="w-[787px]">
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="passCode">Password</Label>
                    <Input
                        id="password"
                        name="passCode"
                        placeholder="Enter your passcode"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </FormGroup>
                <h5> Gender : </h5>
                <FormGroup check>
                    <Input
                        type="radio"
                        name="gender"
                        checked={user.gender === "Male"}
                        onChange={() => setUser({ ...user, gender: "Male" })}
                    />{" "}
                    <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        type="radio"
                        name="gender"
                        checked={user.gender === "Female"}
                        onChange={() => setUser({ ...user, gender: "Female" })}
                    />{" "}
                    <Label check>Female</Label>
                </FormGroup>


                <h5 className="mt-3"> Hobbie : </h5>
                <ReactSelect
                    isMulti
                    className="w-[300px]"
                    options={hobbies}
                    value={hobbyArr.map((e) => {
                        return { label: e.toUpperCase(), value: e };
                    })}
                    onChange={multiSelectHandler}
                />

                <h5 className="mt-3"> User type : </h5>
                <ReactSelect
                    className="w-[150px]"
                    options={userTypes}
                    value={userTypes.find((ut) => ut.value === userType)}
                    onChange={singleSelectHandler}
                />


                {!index && index !== 0 ? (
                    <Button
                        onClick={submitHandler}
                        className="w-100  mt-3"
                        role="button"
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Submit
                    </Button>
                ) : (
                    <Button
                        onClick={updateHandler}
                        className="w-100  mt-3"
                        role="button"
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Update
                    </Button>
                )}
            </Form>


            <Table className="mt-5">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>User Type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userArr.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.hobby ? user.hobby.join(", ") : ""}</td>
                            <td>{user.userType}</td>
                            <td>
                                <Edit onClick={() => editHandler(user, index)} role="button" color="gray" size={25} />
                            </td>
                            <td>
                                <Trash onClick={() => deleteHandler(index)} role="button" color="red" size={25} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


        </div>
    );
}