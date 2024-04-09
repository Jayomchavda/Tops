import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function ChechboxTask() {
    const [checkedItems, setCheckedItems] = useState({
        cricket: false,
        chess: false,
        football: false,
        tennis: false,
        hockey: false
    });


    const checkboxHandler = (e) => {
        const { name, checked } = e.target;
        if (checked !== checkedItems[name]) {
            setCheckedItems(e => ({
                ...e,
                [name]: checked
            }));
            console.log("My Hobby", { [name]: checked });
        }
    };

    return (
        <div>
            <Form>
                <h1>My Hobby</h1>
                <FormGroup check>

                    <Input type="checkbox" name="cricket" checked={checkedItems.cricket} onChange={checkboxHandler} />
                    <Label check>
                        Cricket
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="chess" checked={checkedItems.chess} onChange={checkboxHandler} />
                    <Label check>
                        Chess
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="football" checked={checkedItems.football} onChange={checkboxHandler} />
                    <Label check>
                        Football
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="tennis" checked={checkedItems.tennis} onChange={checkboxHandler} />
                    <Label check>
                        Tennis
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="hockey" checked={checkedItems.hockey} onChange={checkboxHandler} />
                    <Label check>
                        Hockey
                    </Label>
                </FormGroup>
            </Form>
        </div>
    );
}
