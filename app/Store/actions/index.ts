import * as onboardAction from "./onboarding"
import * as articlesAction from "./articles"
import * as commentsAction from "./comments"

export const ActionCreators = Object.assign({},
    onboardAction,
    articlesAction,
    commentsAction)