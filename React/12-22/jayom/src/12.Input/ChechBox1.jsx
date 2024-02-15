import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function ChechBox1() {
    let [color, setColor] = useState([""])

    const checkHandler = (clr, e) => {

        if (e?.target?.checked) {
            setColor([...color, clr]);

        } else {
            let filterData = color.filter((e) => e !== clr)
            setColor(filterData);
        }
    }
    return (
        <div>
            <h1>Color:{color}</h1>
            <Form>
                <FormGroup check>
                    <Input checked={color.includes("green")} type="checkbox" onChange={(e) => checkHandler("green", e)} />
                    <Label check>
                        green
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={color.includes("red")} type="checkbox" onChange={(e) => checkHandler("red", e)} />
                    <Label check>
                        red
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={color.includes("yellow")} type="checkbox" onChange={(e) => checkHandler("yellow", e)} />
                    <Label check>
                        yellow
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={color.includes("blue")} type="checkbox" onChange={(e) => checkHandler("blue", e)} />
                    <Label check>
                        blue
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={color.includes("black")} type="checkbox" onChange={(e) => checkHandler("black", e)} />
                    <Label check>
                        black
                    </Label>
                </FormGroup>
            </Form>

            <hr />

            <div>
                {
                    color.map((e, i) => {
                        return <li key={i}>{e}</li>;
                    })
                }
            </div>
        </div>
    )
}
