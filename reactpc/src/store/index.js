import { createStore, applyMiddleware, compose } from 'redux';//compose
import reducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createHashHistory'

const history = createHistory();

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(
  applyMiddleware(...middlewares, routerMiddleware(history)),
);
export default createStore(reducer, {}, storeEnhancers);