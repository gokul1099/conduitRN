import * as onboardingAction from "../actions/onboarding"
import actionTypes from "../actions/type"
import { put, call } from "redux-saga/effects"



export function* signupSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        yield put(onboardingAction.singupData("userData", response.data, actionTypes.SIGNUP_DATA))

    }
    catch (e: any) {
        console.log(e)
    }
}

export function* signinSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        yield put(onboardingAction.singinData("userData", response.data, actionTypes.SIGNIN_DATA))

    }
    catch (e: any) {
        console.log(e)
    }
}