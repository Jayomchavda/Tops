import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Msg from './Msg'
import { toast } from 'react-toastify'

export default class UnMount extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }

    }
    inc() {
        this.setState({ count: this.state.count + 1 })
    }

    componentWillUnmount() {
        alert("====");
        toast.info("remove");
    }


    render() {
        return (
            <div>
                <h1>Count is {this.state.count}</h1>
                <Button color='danger' onClick={() => this.inc()} >INC</Button>
                <hr />
                {
                    this.state.count < 10 &&
                    <Msg />
                }
            </div>
        )
    }
}
