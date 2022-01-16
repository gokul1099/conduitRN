
import actionTypes from "../actions/type";
const initialState = {}
const onboardingReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case actionTypes.LOGIN:
            return {
                ...state
            }
        case actionTypes.LOGIN_DATA:
            return {
                ...state,
                [actions.index]: [actions.data]
            }
        case actionTypes.SIGNUP:
            return {
                ...state
            }
        case actionTypes.SIGNUP_DATA:
            return {
                ...state,
                [actions.index]: [actions.data]
            }
        default:
            break;
    }
}

export default onboardingReducer