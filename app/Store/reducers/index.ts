import { combineReducers } from 'redux'
import onboardingReducer from "./onboarding"

const allReducers = combineReducers({
    onboarding: onboardingReducer
})

export default allReducers