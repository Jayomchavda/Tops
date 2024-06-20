import React from 'react'
import { Provider } from 'react-redux'
import City from './City'
import HomeNew from './HomeNew'
import { store } from '../Redux/App'

export default function NewReduxMain() {
    return (
        <Provider store={store}>
            <HomeNew />
            <City />
        </Provider >
    )
}
