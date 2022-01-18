import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {  studentDetailReducer, studentListReducer, studentUpdateReducer } from './reducers/studentReducer';


const initialState = {};

const reducer = combineReducers({
    studentReducer: studentListReducer,
    
    studentDetail: studentDetailReducer,
    studentUpdate: studentUpdateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;