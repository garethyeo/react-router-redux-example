import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import homeReducer from "./Reducers/HomeReducer";
import aboutReducer from "./Reducers/AboutReducer";
import carMiddleware from "./Middleware/CarMiddleware";
import monkeyMiddleware from "./Middleware/MonkeyMiddleware";

const middleware = applyMiddleware(
  carMiddleware,
  monkeyMiddleware
);

const reducers = combineReducers({
  home: homeReducer,
  about: aboutReducer
});

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
