import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipalInput3() {
    let [student, setStudent] = useState({
        studentname: "",
        className: "",
        Rollno: "",
        GRno: "",
        City: "",

    })

    let [studentArr, setStudentArr] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setStudentArr([...studentArr, student])
        setStudent({
            studentname: "",
            className: "",
            Rollno: "",
            GRno: "",
            City: "",
        })

    }

    const deleteHandler = (index) => {
        let filterData = studentArr.filter((e, i) => i !== index)
        setStudentArr(filterData)
    }



    return (
        <>
            <div>
                <h1>Student Details</h1>
                <Form onSubmit={(e) => submitHandler(e)} >
                    <FormGroup>
                        <Label for="student">
                            Student Name
                        </Label>
                        <Input
                            id="studentname"
                            placeholder="Enter Student Name"
                            type="text"
                            onChange={(e) => setStudent({ ...student, studentname: e?.target?.value })}
                            value={student.studentname}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="className">
                            Class
                        </Label>
                        <Input
                            id="className"
                            placeholder="Enter className"
                            type="text"
                            onChange={(e) => setStudent({ ...student, className: e?.target?.value })}
                            value={student.className}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Rollno">
                            Roll no
                        </Label>
                        <Input
                            id="Rollno"
                            placeholder="Enter Roll no"
                            type="text"
                            onChange={(e) => setStudent({ ...student, Rollno: e?.target?.value })}
                            value={student.Rollno}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="GRno">
                            GR no
                        </Label>
                        <Input
                            id="GRno"
                            placeholder="Enter GR no"
                            type="text"
                            onChange={(e) => setStudent({ ...student, GRno: e?.target?.value })}
                            value={student.GRno}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">
                            City
                        </Label>
                        <Input
                            id="City"
                            placeholder="Enter City name"
                            type="text"
                            onChange={(e) => setStudent({ ...student, City: e?.target?.value })}
                            value={student.City}
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
                                Student Name
                            </th>
                            <th>
                                className
                            </th>
                            <th>
                                Rollno
                            </th>
                            <th>
                                GRno
                            </th>
                            <th>
                                City
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            studentArr.map((e, i) => {
                                return (

                                    <tr key={i}>
                                        <th scope="row" >
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e?.studentname}
                                        </td>
                                        <td>
                                            {e?.className}
                                        </td>
                                        <td>
                                            {e?.Rollno}
                                        </td>
                                        <td>
                                            {e?.GRno}
                                        </td>
                                        <td>
                                            {e?.City}
                                        </td>
                                        <Trash onClick={() => deleteHandler(i)} color='red' size={40} role='button' />
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
