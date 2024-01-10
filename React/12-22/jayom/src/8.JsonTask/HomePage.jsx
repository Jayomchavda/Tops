import React, { useState } from 'react'
import Data from "./Product.json";
import Header from './Header';
import CardCom from './CardCom';



export default function HomePage() {

    let [Produc̥tdata, Setproductdata] = useState(Data);
    return (
        <div>
            <Header />
            <div className='productcontain'>
                {
                    Produc̥tdata?.map((e, id) => {
                        return <CardCom key={id} item={e} />
                    })
                }
            </div>
        </div>
    )
}
