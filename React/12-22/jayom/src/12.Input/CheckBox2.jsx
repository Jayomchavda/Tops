import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function CheckBox2() {
    let [hobby, setHobby] = useState([""])

    const checkHandler = (hby, e) => {

        if (e.target.checked) {
            setHobby([...hobby, hby])

        } else {
            let filterData = hobby.filter((e) => e !== hby)
            setHobby(filterData);
        }
    }

    return (
        <div>
            <h1>Hobby : {hobby}</h1>
            <Form>
                <FormGroup check>
                    <Input checked={hobby.includes("cricket")} type="checkbox" onChange={(e) => checkHandler("cricket", e)} />
                    <Label check>
                        cricket
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={hobby.includes("chess")} type="checkbox" onChange={(e) => checkHandler("chess", e)} />
                    <Label check>
                        chess
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={hobby.includes("hockey")} type="checkbox" onChange={(e) => checkHandler("hockey", e)} />
                    <Label check>
                        hockey
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={hobby.includes("football")} type="checkbox" onChange={(e) => checkHandler("football", e)} />
                    <Label check>
                        football
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={hobby.includes("race")} type="checkbox" onChange={(e) => checkHandler("race", e)} />
                    <Label check>
                        race
                    </Label>
                </FormGroup>
            </Form>

            <div>
                {
                    hobby.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })
                }
            </div>
        </div>
    )
}
