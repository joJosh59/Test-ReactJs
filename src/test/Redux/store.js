import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import Reducer1 from './reducer';

const Store = createStore(Reducer1, applyMiddleware(thunk));

export default Store;