import React, { useReducer } from "react";
import { Button } from "reactstrap";

function reducer(state, action) {
    if (action === "INC-1") {
        return state + 1;
    } else if (action === "DEC-1") {
        return state - 1;
    } else if (action === "INC-5") {
        return state + 5;
    } else if (action === "DEC-5") {
        return state - 5;
    } else if (action === "INC-10") {
        return state + 10;
    } else if (action === "DEC-10") {
        return state - 10;
    } else if (action === "INC-20") {
        return state + 20;
    } else if (action === "DEC-20") {
        return state - 20;
    } else if ("clean") {
        return 0;
    }


    else {
        return state;
    }
}

export default function UseReducer() {
    let [count, dispatch] = useReducer(reducer, 0);



    return (
        <div>
            <h1 className="text-center">Count is {count}</h1>
            <div className="border border-2 border-black p-3">
                <div className="m-3 d-flex gap-3" >
                    <Button color="danger" onClick={() => dispatch("INC-1")}>Increment - 1</Button>
                    <Button color="danger" onClick={() => dispatch("DEC-1")}>Decrement - 1</Button>
                </div>
                <div className="m-3 d-flex gap-3">
                    <Button color="danger" onClick={() => dispatch("INC-5")}>Increment - 5</Button>
                    <Button color="danger" onClick={() => dispatch("DEC-5")}>Decrement - 5</Button>
                </div>
                <div className="m-3 d-flex gap-3">
                    <Button color="danger" onClick={() => dispatch("INC-10")}>Increment - 10</Button>
                    <Button color="danger" onClick={() => dispatch("DEC-10")}>Decrement - 10</Button>
                </div>
                <div className="m-3 d-flex gap-3">
                    <Button color="danger" onClick={() => dispatch("INC-20")}>Increment - 20</Button>
                    <Button color="danger" onClick={() => dispatch("DEC-20")}>Decrement - 20</Button>
                </div>
                <div className="m-3 d-flex justify-content-center ">
                    <Button color="danger" onClick={() => dispatch("RESET")}>Clean</Button>
                </div>
            </div>
        </div>
    );
}