import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipalInput5() {
    let [hospital, setHospital] = useState({
        hospitalname: "",
        pasentname: "",
        totalbed: "",
    })

    let [hospitalArr, setHospitalArr] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setHospitalArr([...hospitalArr, hospital])
        setHospital({
            hospitalname: "",
            pasentname: "",
            totalbed: "",
            currentbed: "",
            city: "",
        })
    }

    const deleteHandler = (index) => {

        let filterData = hospitalArr.filter((e, i) => i !== index)
        setHospitalArr(filterData)
    }

    let [index, setIndex] = useState("");
    let [updateMode, setUpdateMode] = useState(true);

    const editHandler = (data, index) => {
        setHospital(data);
        setIndex(index);
        setUpdateMode(false);
    }

    const updateHandler = () => {
        let newArr = hospitalArr.map((e, i) => {
            if (i === index) {
                return hospital
            } else {
                return e
            }
        })
        setHospitalArr(newArr);
        setHospital("");
        setUpdateMode(true);
    }

    return (
        <>
            <div>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label for="hospital">
                            Hospital Name
                        </Label>
                        <Input
                            id="hospital"
                            placeholder="Enter Hospital Name"
                            type="text"
                            onChange={(e) => setHospital({ ...hospital, hospitalname: e?.target?.value })}
                            value={hospital.hospitalname}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="hospital">
                            Pasent Name
                        </Label>
                        <Input
                            id="pasent"
                            placeholder="Enter Pasent Name"
                            type="text"
                            onChange={(e) => setHospital({ ...hospital, pasentname: e?.target?.value })}
                            value={hospital.pasentname}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="totalbed">
                            Total bed
                        </Label>
                        <Input
                            id="bed"
                            placeholder="Enter Total bed"
                            type="text"
                            onChange={(e) => setHospital({ ...hospital, totalbed: e?.target?.value })}
                            value={hospital.totalbed}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="currentbed">
                            Current bed
                        </Label>
                        <Input
                            id="bed"
                            placeholder="Enter current bed"
                            type="text"
                            onChange={(e) => setHospital({ ...hospital, currentbed: e?.target?.value })}
                            value={hospital.currentbed}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">
                            City
                        </Label>
                        <Input
                            id="bed"
                            placeholder="Enter City"
                            type="text"
                            onChange={(e) => setHospital({ ...hospital, city: e?.target?.value })}
                            value={hospital.city}
                        />
                    </FormGroup>

                    {
                        updateMode ? <Button onClick={(e) => submitHandler(e)} color='danger' className='w-100'>
                            Submit
                        </Button> : <Button onClick={(e) => updateHandler(e)} className='w-100'>
                            update
                        </Button>
                    }



                </Form>

                <Table
                >
                    <thead>
                        <tr>
                            <th>
                                Sr.no
                            </th>
                            <th>
                                Hospital Name
                            </th>
                            <th>
                                Pasent Name
                            </th>
                            <th>
                                Totalbed
                            </th>
                            <th>
                                Currentbed
                            </th>
                            <th>
                                City
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hospitalArr.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e?.hospitalname}
                                        </td>
                                        <td>
                                            {e?.pasentname}
                                        </td>
                                        <td>
                                            {e?.totalbed}
                                        </td>
                                        <td>
                                            {e?.currentbed}
                                        </td>
                                        <td>
                                            {e?.city}
                                        </td>
                                        <Edit onClick={() => editHandler(e, i)} color='gray' size={40} />
                                        <Trash onClick={() => deleteHandler(i)} color='red' size={40} />
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
