import React from 'react'
import { Provider } from 'react-redux'
import ComA1 from './Ui/ComA1'
import ComB1 from './Ui/ComB1'
import { store } from './Redux/app'
import User from './Redux/user'

export default function ReduxMain() {
    return (
        <Provider store={store}>
            <ComA1 />
            <ComB1 />
            <User />
        </Provider>
    )
}
