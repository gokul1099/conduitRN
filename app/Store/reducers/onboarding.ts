
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
export const onboardingReducer = createReducer(initialState, {
    [actionTypes.LOGIN](state: any, action: any) {
        return {
            ...state
        }
    },
    [actionTypes.LOGIN_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: [action.data]
        }
    },
    [actionTypes.SIGNUP](state: any, action: any) {
        return {
            ...state
        }
    },
    [actionTypes.SIGNUP_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: [action.data]
        }
    }
})

