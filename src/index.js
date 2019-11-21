import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { createStore } from "redux";
import { Provider } from "react-redux";  //bridge between react & redux
import { reducer } from '.reducers';

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(reducer);
console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}> 
    <App />,
    </Provider>,
    rootElement);
