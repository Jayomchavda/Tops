import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';

export default function SingleUsers() {

    let [data, setData] = useState([])
    let { id } = useParams();



    useEffect(() => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/users/1"
        })
            .then((res) => {
                console.log("===res===>", res.data)
                setData(res.data)
            })
            .catch((err) => {
                console.log("===err===>", err)
            })
    })
    return (
        <div>
            <Table className='mt-3  ' style={{ backgroundColor: "ButtonHighlight" }}
            >
                <tr>
                    <th>
                        Email : {data?.email}
                    </th>
                </tr>
                <tr>
                    <th>

                        Username : {data?.username}
                    </th>
                </tr>
                <tr>
                    <th>

                        Password : {data?.password}
                    </th>
                </tr>
                <tr>
                    <th>

                        Firstname : {data?.name?.firstname}
                    </th>
                </tr>
                <tr>
                    <th>

                        Lastname : {data?.name?.lastname}
                    </th>
                </tr>
                <tr>
                    <th>

                        City : {data?.address?.city}
                    </th>
                </tr>
                <tr>
                    <th>

                        Street : {data?.address?.street}
                    </th>
                </tr>
                <tr>
                    <th>

                        Number : {data?.address?.number}
                    </th>
                </tr>
                <tr>
                    <th>

                        Zipcode : {data?.address?.zipcode}
                    </th>
                </tr>
                <tr>
                    <th>

                        Phone : {data?.phone}
                    </th>
                </tr>

            </Table>
        </div>
    )
}
