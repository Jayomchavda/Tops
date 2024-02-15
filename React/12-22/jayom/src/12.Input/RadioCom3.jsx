import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function RadioCom3() {
    let [season, setSeason] = useState("")

    return (
        <div>
            <h1>Season:{season}</h1>
            <Form>
                <FormGroup check>
                    <Input checked={season === "summer"} type="radio" onChange={() => setSeason("summer")} />
                    <Label check>
                        summer
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={season === "winter"} type="radio" onChange={() => setSeason("winter")} />
                    <Label check>
                        winter
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={season === "monsoon"} type="radio" onChange={() => setSeason("monsoon")} />
                    <Label check>
                        monsoon
                    </Label>
                </FormGroup>
            </Form>
        </div>
    )
}
