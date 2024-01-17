import React, { Component } from 'react'
import { toast } from 'react-toastify';
import { Alert } from 'reactstrap'

export default class Msg extends Component {

    componentWillUnmount() {
        toast.warn("removing")
    }

    componentDidMount() {
        toast.success("Componenet is showing");
    }
    render() {
        return (
            <div>
                <h1>Count is Less Than 10</h1>

            </div>
        )
    }
}
