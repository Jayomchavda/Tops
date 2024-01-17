import React from 'react'
import { useState } from 'react'

export default function ConditionalRender() {
    let [user, setuser] = useState("boy");
    return (
        <div>

            {
                user === "boy" ?
                    <h1>Hello boys</h1> :
                    <h1>Hello girls</h1>
            }




        </div >
    )
}
