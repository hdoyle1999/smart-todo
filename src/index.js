import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';  //if using the commented section below import createFirestoreInstance aswell
import { getFirebase } from 'react-redux-firebase';

import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'

//Had to alter the store abit as react-redux-firebase has since updated from the tutorial I was following and the original methods were updated

const store = createStore(
  rootReducer,
  compose(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

// const rrfProps = {
//   firebase,
//   config: {},
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
