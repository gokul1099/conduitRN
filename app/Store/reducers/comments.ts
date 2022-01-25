import actionTypes from "../actions/type";
export default function createReducer(initialState: any, handlers: any) {
    return function reducer(state = initialState, action: any) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

const initialState = {}

export const commentsReducer = createReducer(initialState, {

    [actionTypes.GET_COMMENTS](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GET_COMMENTS_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.ADD_COMMENTS](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.ADD_COMMENTS_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.DELETE_COMMENTS](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.DELETE_COMMENTS_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
})