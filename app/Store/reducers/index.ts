import * as onboardingReducer from "./onboarding"
import * as articlesReducer from "./articles"
import * as commentsReducer from "./comments"
export default Object.assign(onboardingReducer, articlesReducer, commentsReducer)