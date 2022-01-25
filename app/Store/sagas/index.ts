import actionTypes from "../actions/type";
import { takeEvery, all } from "@redux-saga/core/effects";

import { signinSaga, signupSaga, getUserDetailSaga, updateUserDetailSaga, getUserProfileSaga, followProfileSaga, unFollowProfileSaga } from "./onboardingSaga"
import { newFeedSaga, globalFeedSaga, createArticleSaga, getArticleSaga, updateArticleSaga, deleteArticleSaga, favArticleSaga, unFavArticleSaga, getTagsSaga } from "./articlesSaga";
import { addCommentSaga, deleteCommentsSaga, getCommentsSaga } from "./commentsSaga";
import { getRequest, postRequest, putRequest, deleteRequest } from "../../Services/app-services";


export default function* watch() {

    //for onboarding
    yield all([takeEvery(actionTypes.SIGNUP, signupSaga, postRequest)])
    yield all([takeEvery(actionTypes.LOGIN, signinSaga, postRequest)])
    yield all([takeEvery(actionTypes.GET_CURRENT_USER_DATAIL, getUserDetailSaga, getRequest)])
    yield all([takeEvery(actionTypes.UPDATE_USER_DETAIL, updateUserDetailSaga, putRequest)])
    yield all([takeEvery(actionTypes.GET_USER_PROFILE, getUserProfileSaga, getRequest)])
    yield all([takeEvery(actionTypes.FOLLOW_USER, followProfileSaga, postRequest)])
    yield all([takeEvery(actionTypes.UNFOLLOW_USER, unFollowProfileSaga, deleteRequest)])


    //for articles
    yield all([takeEvery(actionTypes.ARTICLES_FROM_FOLLOWEES, newFeedSaga, getRequest)])
    yield all([takeEvery(actionTypes.GLOBAL_ARTICLES, globalFeedSaga, getRequest)])
    yield all([takeEvery(actionTypes.CREATE_ARTICLES, createArticleSaga, postRequest)])
    yield all([takeEvery(actionTypes.GET_ARTICLES, getArticleSaga, getRequest)])
    yield all([takeEvery(actionTypes.UPDATE_ARTICLE, updateArticleSaga, putRequest)])
    yield all([takeEvery(actionTypes.DELECT_ARTICLE, deleteArticleSaga, deleteRequest)])
    yield all([takeEvery(actionTypes.FAV_ARTICLE, favArticleSaga, postRequest)])
    yield all([takeEvery(actionTypes.UNFAV_ARTICLE, unFavArticleSaga, deleteRequest)])
    yield all([takeEvery(actionTypes.GET_TAGS, getTagsSaga, getRequest)])

    //for comments
    yield all([takeEvery(actionTypes.GET_COMMENTS, getCommentsSaga, getRequest)])
    yield all([takeEvery(actionTypes.ADD_COMMENTS, addCommentSaga, postRequest)])
    yield all([takeEvery(actionTypes.DELETE_COMMENTS, deleteCommentsSaga, deleteRequest)])








}