import { createStore, combineReducers } from 'redux';
import { toolbar } from './reducers/toolbarReducer';

const reducers = combineReducers({
    toolbar: toolbar,
});

export default createStore(
    reducers,
);