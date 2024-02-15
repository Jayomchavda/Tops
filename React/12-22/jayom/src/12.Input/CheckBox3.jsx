import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function CheckBox3() {
    let [city, setCity] = useState([""])

    const checkHandler = (cty, e) => {

        if (e.target.checked) {
            setCity([...city, cty])
        } else {
            let filterData = city.filter((e) => e !== cty)
            setCity(filterData)
        }

    }
    return (
        <div>
            <h1>City: {city}</h1>
            <Form>
                <FormGroup check>
                    <Input checked={city.includes("surat")} type="checkbox" onChange={(e) => checkHandler("surat", e)} />
                    <Label check>
                        surat
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={city.includes("rajkot")} type="checkbox" onChange={(e) => checkHandler("rajkot", e)} />
                    <Label check>
                        rajkot
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={city.includes("baroda")} type="checkbox" onChange={(e) => checkHandler("baroda", e)} />
                    <Label check>
                        baroda
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={city.includes("anand")} type="checkbox" onChange={(e) => checkHandler("anand", e)} />
                    <Label check>
                        anand
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={city.includes("mumbai")} type="checkbox" onChange={(e) => checkHandler("mumbai", e)} />
                    <Label check>
                        mumbai
                    </Label>
                </FormGroup>
            </Form>

            <div>
                {
                    city.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })
                }
            </div>
        </div>
    )
}
