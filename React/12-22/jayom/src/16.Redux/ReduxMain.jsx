import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/app'
import User from './Ui/user'
import Home from './Ui/Home'

export default function ReduxMain() {
    return (
        <Provider store={store}>
            <Home />
            <User />
        </Provider>
    )
}
