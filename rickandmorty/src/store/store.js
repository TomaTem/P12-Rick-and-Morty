import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {mainReducer} from './reducers/mainReducer';
import { savedState, loadState } from "./LS.js";

const reducer = combineReducers({
  mainStore: mainReducer,
});

 const store = configureStore({
    reducer: reducer,
    preloadedState: loadState(),
  });

store.subscribe(() => {
    savedState(store.getState());
  });

  export {store}