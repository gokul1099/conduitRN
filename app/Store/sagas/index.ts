import actionTypes from "../actions/type";
import { takeEvery, all } from "@redux-saga/core/effects";

import { signinSaga, signupSaga } from "./onboardingSaga"
import { getRequest, postRequest } from "../../Services/app-services";


export default function* watch() {

    yield all([takeEvery(actionTypes.SIGNUP, signupSaga, postRequest)])
    yield all([takeEvery(actionTypes.LOGIN, signinSaga, postRequest)])
}