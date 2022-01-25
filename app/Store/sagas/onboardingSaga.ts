import * as onboardingAction from "../actions/onboarding"
import actionTypes from "../actions/type"
import { put, call } from "redux-saga/effects"
import AsyncStorage from "@react-native-async-storage/async-storage"


const storeData = async (data: object) => {
    const token = data?.user.token
    await AsyncStorage.setItem("token", JSON.stringify(token))
}
export function* signupSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.singupData(actionTypes.SIGNUP_DATA, "userData", response.data))
            storeData(response.data)
            yield put(onboardingAction.isLoggedin(actionTypes.IS_LOGIN, "loginStatus", true))
        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))


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
            storeData(response.data)
            yield put(onboardingAction.isLoggedin(actionTypes.IS_LOGIN, "loginStatus", true))


        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}


export function* getUserDetailSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.getUserDetailData(actionTypes.GET_CURRENT_USER_DATAIL_DATA, "userData", response.data))

        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}

export function* updateUserDetailSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.getUserDetailData(actionTypes.UPDATE_USER_DETAIL_DATA, "userData", response.data))

        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}

export function* getUserProfileSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.getProfileData(actionTypes.GET_USER_PROFILE_DATA, "profileData", response.data))


        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}

export function* followProfileSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.followProfileData(actionTypes.FOLLOW_USER_DATA, "profileFollowResponse", response.data))

        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))

        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}
export function* unFollowProfileSaga(service: any, payload: object): any {
    try {
        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(onboardingAction.unFollowProfileData(actionTypes.UNFOLLOW_USER_DATA, "profileUnFollowResponse", response.data))
        }
        else {
            yield put(onboardingAction.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }
        yield put(onboardingAction.loader(actionTypes.LOADER, "loader", false))

    }
    catch (e: any) {
        console.log(e)
    }
}

