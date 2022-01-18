import * as onboardingAction from "../actions/onboarding"
import actionTypes from "../actions/type"
import { put, call } from "redux-saga/effects"
import { onboardingReducer } from "../reducers/onboarding"



export function* signupSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.singupData(actionTypes.SIGNUP_DATA, "userData", response.data))
            yield put(onboardingAction.isLoggedin(actionTypes.IS_LOGIN, "loginStatus", true))
        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }

    }
    catch (e: any) {
        console.log(e)
    }
}

export function* signinSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.singinData(actionTypes.LOGIN_DATA, "userData", response.data))
            yield put(onboardingAction.isLoggedin(actionTypes.IS_LOGIN, "loginStatus", true))

        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }


    }
    catch (e: any) {
        console.log(e)
    }
}