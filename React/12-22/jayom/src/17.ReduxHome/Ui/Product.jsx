import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap'
import { fetchProduct } from '../Redux/product'
import { Eye } from 'lucide-react';

export default function Product() {

    let data = useSelector((store) => store.newProduct);
    console.log("data", data);


    const dispatch = useDispatch()


    return (
        <div>
            <Button onClick={() => dispatch(fetchProduct())}>Call API</Button>



            <Table striped>
                <thead>
                    <tr>
                        <th>Sr.</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.product?.map((e, i) => {
                        return (
                            <tr key={e.id}>
                                <th scope="row">{i + 1}</th>
                                <td>
                                    <img style={{ height: "40px" }} src={e.image} />
                                </td>
                                <td>{e?.title}</td>
                                <td>{e?.price}</td>
                                <td>
                                    <Eye
                                        role="button"
                                        onClick={() => navigate(`/product/${e.id}`)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}
