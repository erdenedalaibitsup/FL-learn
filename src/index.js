import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import loginReducer from "./redux/reducer/login_reducer";
import singupReducer from "./redux/reducer/singup_reducer"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"


const loggerMiddlaware = store => {
  return (next) => {
    return action => {
      console.log("MyLogger middleware ene yg ajilhnuu ===>", action);
      console.log("MyLogger middleware state before", store.getState())
      const result = next(action);
      console.log("MyLogger middleware state after", result);
      return result;

    }
  }
}
const reducers = combineReducers({
  loginReducer,
  singupReducer
});
const middlewares = [loggerMiddlaware, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
