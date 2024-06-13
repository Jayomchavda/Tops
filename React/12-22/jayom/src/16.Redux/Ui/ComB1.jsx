import React from 'react'
import { Button } from 'reactstrap'
import { incrementCount } from '../Redux/countSlice'
import { useDispatch } from 'react-redux'

export default function ComB1() {
    let dispatch = useDispatch();
    return (
        <Button color='danger' onClick={() => dispatch(incrementCount())}>INC</Button>
    )
}
