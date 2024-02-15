import { Trash } from 'lucide-react';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function MultipalInput2() {

    let [car, setCar] = useState({
        car: "",
        numplate: "",
        Chassis: "",
        CC: "",
    });

    let [carArr, setCarArr] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        setCarArr([...carArr, car])
        setCar({
            car: "",
            numplate: "",
            Chassis: "",
            CC: "",
        })
    }

    const deletHandler = (index) => {
        let filterData = carArr.filter((e, i) => i !== index)
        setCarArr(filterData);

    }

    return (
        <>
            <div >
                <h1 style={{
                    color: 'blue',
                }}>Car Details</h1>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label for="car">
                            Car Name
                        </Label>
                        <Input
                            id="car"
                            name="car"
                            placeholder="Enter Car Name"
                            type="text"
                            onChange={(e) => setCar({ ...car, car: e?.target?.value })}
                            value={car.car}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="numplate">
                            Enter Number plate
                        </Label>
                        <Input
                            id="numplate"
                            name="number"
                            placeholder="Enter Number Plate"
                            type="text"
                            onChange={(e) => setCar({ ...car, numplate: e?.target?.value })}
                            value={car.numplate}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="Chassis">
                            Enter Chassis Number
                        </Label>
                        <Input
                            id="Chassis"
                            name="number"
                            placeholder="Enter Chassis Number"
                            type="text"
                            onChange={(e) => setCar({ ...car, Chassis: e?.target?.value })}
                            value={car.Chassis}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="CC">
                            Cubic Capacity
                        </Label>
                        <Input
                            id="Cubic Capacity"
                            name="cc"
                            placeholder="Enter Cubic Capacity"
                            type="text"
                            onChange={(e) => setCar({ ...car, CC: e?.target?.value })}
                            value={car.CC}
                        />
                    </FormGroup>



                    <Button onClick={(e) => submitHandler(e)} color='danger' className='w-100'>
                        Submit
                    </Button>
                </Form>

                <Table className='mt-3'
                >
                    <thead>
                        <tr>
                            <th>
                                Sr.no
                            </th>
                            <th>
                                Car Name
                            </th>
                            <th>
                                Number Plate
                            </th>
                            <th>
                                Chassis Number
                            </th>
                            <th>
                                Cubic capacity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carArr.map((e, i) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">
                                                {i + 1}
                                            </th>
                                            <td>
                                                {e?.car}
                                            </td>
                                            <td>
                                                {e?.numplate}
                                            </td>
                                            <td>
                                                {e?.Chassis}
                                            </td>
                                            <td>
                                                {e?.CC}
                                            </td>
                                            <Trash onClick={() => deletHandler(i)} size={40} color='red' role='button' />
                                        </tr>
                                    </>

                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}
