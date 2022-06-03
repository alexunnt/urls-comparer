import { createStore } from 'redux';
import {storeReducer} from './reducers/storeReducer';

export const initialState = {
    deleted: [],
    added: [],
    changed: [],
}

export const store = createStore(storeReducer, initialState);
