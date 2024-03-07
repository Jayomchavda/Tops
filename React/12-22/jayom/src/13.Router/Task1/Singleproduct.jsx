import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';

export default function Singleproduct() {

    let [data, setData] = useState({});
    let { id } = useParams();

    useEffect(() => {

        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${id}`
        })
            .then((res) => {
                console.log("===res===>", res)
                setData(res.data)
            })
    }, [])
    return (
        <>
            <div className='mt-3 '>
                <img className='mt-3 ' style={{ height: "400px" }} src={data.image} />
            </div>
            <div>

                <Table className='d-flex align-content-center flex-column mt-3 fs-6 '>
                    <tr>
                        <th>
                            Title : {data.title}
                        </th>
                    </tr>
                    <tr>
                        <th>

                            Price : {data.price}
                        </th>
                    </tr>
                    <tr>
                        <th>

                            Category : {data.category}
                        </th>
                    </tr>
                    <tr>
                        <th>

                            Description : {data.description}
                        </th>
                    </tr>
                </Table>
            </div >
        </>
    )
}
