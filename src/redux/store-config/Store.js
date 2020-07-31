import { createStore } from 'redux';
import CoronaReducer from '../reducers/CoronaReducer'
const Store = createStore(
    CoronaReducer
);

export { Store }