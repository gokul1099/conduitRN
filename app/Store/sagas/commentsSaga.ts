import * as commentActions from "../actions/comments"
import * as  onboardingActions from "../actions/onboarding"
import actionTypes from "../actions/type"
import { put, call } from "redux-saga/effects"
import AsyncStorage from "@react-native-async-storage/async-storage"


const storeData = async (data: object) => {
    const token = data?.user.token
    await AsyncStorage.setItem("token", JSON.stringify(token))
}
export function* addCommentSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(commentActions.addCommentData(actionTypes.ADD_COMMENTS_DATA, "newCmtResponse", response.data))

        }
        else {
            yield put(onboardingActions.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }
        yield put(onboardingActions.loader(actionTypes.LOADER, "loader", false))


    }
    catch (e: any) {
        console.log(e)
    }
}
export function* getCommentsSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(commentActions.getCommentsData(actionTypes.GET_COMMENTS_DATA, "comments", response.data))

        }
        else {
            yield put(onboardingActions.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }
        yield put(onboardingActions.loader(actionTypes.LOADER, "loader", false))


    }
    catch (e: any) {
        console.log(e)
    }
}

export function* deleteCommentsSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(commentActions.deleteCommentsData(actionTypes.DELETE_COMMENTS_DATA, "deletCmtResponse", response.data))

        }
        else {
            yield put(onboardingActions.errors(actionTypes.ERROR, "error", response.data ? response.data.errors : { error: "Something went wrong, Please try again !" }))
        }
        yield put(onboardingActions.loader(actionTypes.LOADER, "loader", false))


    }
    catch (e: any) {
        console.log(e)
    }
}