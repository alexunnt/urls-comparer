import { initialState } from "../store";
import {
    ADD_DELETED,
    ADD_ADDED,
    ADD_CHANGED,
} from "../actions/storeActions";


export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DELETED:
            return {
                ...state,
                deleted: [...state.deleted, action.text]
            }
        case ADD_ADDED:
            return {
                ...state,
                added: [...state.added, action.text]
            }
        case ADD_CHANGED:
            return {
                ...state,
                changed: [...state.added, action.text]
            }
        default:
            return state;
    }
}