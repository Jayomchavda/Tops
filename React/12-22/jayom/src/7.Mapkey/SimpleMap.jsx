import React, { useId } from 'react'

let name = ["Jayom", "Abhishek", "Dhwanil", "Ronak"]

export default function SimpleMap() {
    return (
        <div className='d-flex align-items-center flex-column '>

            {
                name.map((e, i) => {
                    let key = useId();
                    return <h1 key={i}>{e}</h1>
                })
            }
        </div >
    )
}
