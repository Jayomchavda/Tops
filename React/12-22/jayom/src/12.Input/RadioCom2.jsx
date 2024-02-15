import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function RadioCom2() {
    let [direction, Setdirection] = useState("")
    return (
        <div>
            <h1>Direction:{direction}</h1>
            <Form>
                <FormGroup check>
                    <Input checked={direction === "north"} type="radio" onChange={() => Setdirection("north")} />
                    <Label check>
                        north
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={direction === "south"} type="radio" onChange={() => Setdirection("south")} />
                    <Label check>
                        south
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={direction === "east"} type="radio" onChange={() => Setdirection("east")} />
                    <Label check>
                        east
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input checked={direction === "west"} type="radio" onChange={() => Setdirection("west")} />
                    <Label check>
                        west
                    </Label>
                </FormGroup>
            </Form>
        </div>
    )
}
