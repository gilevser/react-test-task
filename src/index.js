import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import './styles/index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    rootView
  )
}
