
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
    [actionTypes.IS_LOGIN](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.ERROR](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.LOGIN](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.LOGIN_DATA](state: any, action: any) {
        console.log("from  reducer")
        return {
            ...state,
            [action.index]: action.data
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
            [action.index]: action.data
        }
    },
    [actionTypes.GET_CURRENT_USER_DATAIL](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GET_CURRENT_USER_DATAIL_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.UPDATE_USER_DETAIL](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.UPDATE_USER_DETAIL_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.GET_USER_PROFILE](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GET_USER_PROFILE_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.FOLLOW_USER](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.FOLLOW_USER_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.UNFOLLOW_USER](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.UNFOLLOW_USER_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    }
})

