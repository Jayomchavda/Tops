import axios from 'axios'
import { Eye } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'reactstrap'

export default function Users() {
    let [user, setUsers] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: "https://fakestoreapi.com/users"
        })
            .then((res) => {
                console.log("===res===>", res.data)
                setUsers(res.data)
            })
            .catch((err) => {
                console.log("===err===>", err)
            })

    })
    const navigate = useNavigate()
    return (
        <div>
            <Table className='mt-4'
            >
                <thead>
                    <tr>
                        <th>
                            Sr.no
                        </th>
                        <th>
                            Email ID
                        </th>
                        <th>
                            User Name
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            City
                        </th>
                        <th>
                            Street
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Zip code
                        </th>
                        <th>
                            Phone No.
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        user.map((e, i) => {
                            return (


                                <tr key={e?.id}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e?.email}
                                    </td>
                                    <td>
                                        {e?.username}
                                    </td>
                                    <td>
                                        {e?.password}
                                    </td>
                                    <td>
                                        {e?.name.firstname}
                                    </td>
                                    <td>
                                        {e?.name.lastname}
                                    </td>
                                    <td>
                                        {e?.address.city}
                                    </td>
                                    <td>
                                        {e?.address.street}
                                    </td>
                                    <td>
                                        {e?.address.number}
                                    </td>
                                    <td>
                                        {e?.address.zipcode}
                                    </td>
                                    <td>
                                        {e?.phone}
                                    </td>
                                    <td>
                                        <Eye role='button' onClick={() => navigate(`/singleusers/${e.id}`)} />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>


        </div>
    )
}
