import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Name is {this?.props?.name}</h1>

            </div>
        )
    }
}
