import { Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Form3() {
    let [institute, setInstitute] = useState({
        name: "",
        contact: "",
        city: "",
        loan: "",
        cours: [],
    })

    let [instituteArr, setInstituteArr] = useState([])
    let [index, setIndex] = useState("")



    const submitHandler = (e) => {
        e.preventDefault();

        if (!institute.name || !institute.contact) {
            alert("Please Enter Institute Name and Contact")
        } else {
            setInstituteArr([...instituteArr, institute])
        }
        setInstitute({
            name: "",
            contact: "",
            city: "",
            loan: "",
            cours: [],
        })
    }

    const checkHandler = (crs, e) => {
        if (e.target.checked) {
            setInstitute({ ...institute, cours: [...institute.cours, crs] })
        } else {
            let filterData = institute.cours.filter((e) => e !== crs)
            setInstitute({ ...institute, cours: filterData })
        }
    }

    const deleteHandler = (index) => {
        let filterData = instituteArr.filter((e, i) => i !== index)
        setInstituteArr(filterData)
    }
    return (
        <>
            <div>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label for="institute">
                            Institute
                        </Label>
                        <Input
                            value={institute.name}
                            id="institute"
                            placeholder="Enter Institute Name"
                            type="text"
                            onChange={(e) => setInstitute({ ...institute, name: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="contact">
                            Contact
                        </Label>
                        <Input
                            value={institute.contact}
                            id="institute"
                            placeholder="Enter Contact Number"
                            type="text"
                            onChange={(e) => setInstitute({ ...institute, contact: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">
                            City
                        </Label>
                        <Input
                            value={institute.city}
                            id="institute"
                            placeholder="Enter City Name"
                            type="text"
                            onChange={(e) => setInstitute({ ...institute, city: e?.target?.value })}
                        />
                    </FormGroup>

                    {/* ========= radio =========== */}

                    <h6 className='d-flex justify-content-md-start'>Loan approval : </h6>
                    <FormGroup className='d-flex justify-content-md-start'>
                        <Input
                            checked={institute.loan === "yes"}
                            type="radio"
                            onChange={() => setInstitute({ ...institute, loan: "yes" })}
                        />
                        <Label >
                            Yes
                        </Label>
                    </FormGroup>

                    <FormGroup className='d-flex justify-content-md-start'>
                        <Input
                            checked={institute.loan === "no"}
                            type="radio"
                            onChange={() => setInstitute({ ...institute, loan: "no" })}
                        />
                        <Label >
                            No
                        </Label>
                    </FormGroup>

                    {/* ========check box ========= */}

                    <hr />
                    <h6 className='d-flex justify-content-md-start'>Cours : </h6>

                    <FormGroup className='d-flex justify-content-md-start' >
                        <Input checked={institute.cours.includes("frontend")}
                            onChange={(e) => checkHandler("frontend", e)}
                            type="checkbox" />
                        <Label >
                            Front End
                        </Label>
                    </FormGroup>

                    <FormGroup className='d-flex justify-content-md-start' >
                        <Input checked={institute.cours.includes("backend")}
                            onChange={(e) => checkHandler("backend", e)}
                            type="checkbox" />
                        <Label >
                            Back End
                        </Label>
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
                                Institute Name
                            </th>
                            <th>
                                Contact Number
                            </th>
                            <th>
                                City Name
                            </th>
                            <th>
                                Loan Approval
                            </th>
                            <th>
                                Cours
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            instituteArr.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e?.name}
                                        </td>
                                        <td>
                                            {e?.contact}
                                        </td>
                                        <td>
                                            {e?.city}
                                        </td>
                                        <td>
                                            {e?.loan}
                                        </td>
                                        <td>
                                            {e?.cours.map((crs) => {
                                                return (
                                                    <div className='"d-flex gap-2 align-items-center"'>
                                                        <li className="list-unstyled">{crs}</li>
                                                    </div>
                                                )
                                            })}
                                        </td>


                                        <Trash role='button' onClick={() => deleteHandler(i)} size={40} color='red' />
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
