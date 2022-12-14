import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './utils/stripe'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Elements stripe={stripePromise}>
                <App />
            </Elements>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
)