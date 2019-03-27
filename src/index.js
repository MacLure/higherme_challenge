import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/container';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/configureStore';
import {submitForm1} from './actions/submitForms';

const store = configureStore()

store.dispatch(submitForm1(
  {
    text: "asdfasd",
    number: 234,
    email: 'example@email.com',
    password: 'examplePassword'
  }
))

console.log(store.getState())

ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
