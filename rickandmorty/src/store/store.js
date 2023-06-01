import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {mainReducer} from './reducers/mainReducer';

const reducer = combineReducers({
    mainStore: mainReducer,
});

export const store = configureStore({ reducer });