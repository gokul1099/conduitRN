import * as articlesActions from "../actions/articles"
import * as  onboardingActions from "../actions/onboarding"
import actionTypes from "../actions/type"
import { put, call } from "redux-saga/effects"
import AsyncStorage from "@react-native-async-storage/async-storage"


const storeData = async (data: object) => {
    const token = data?.user.token
    await AsyncStorage.setItem("token", JSON.stringify(token))
}
export function* newFeedSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.newFeedsData(actionTypes.ARTICLES_FROM_FOLLOWEES_DATA, "newfeeds", response.data))

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

export function* globalFeedSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.globalFeedData(actionTypes.GLOBAL_ARTICLES_DATA, "globalfeeds", response.data))
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

export function* createArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.createArticleData(actionTypes.CREATE_ARTICLES_DATA, "createArticleResponse", response.data))
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

export function* getArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.getArticleData(actionTypes.GET_ARTICLES_DATA, "singleArticle", response.data))
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

export function* updateArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.updateArticleData(actionTypes.UPDATE_ARTICLE_DATA, "updateArticleResponse", response.data))
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

export function* deleteArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.deleteArticleData(actionTypes.DELECT_ARTICLE_DATA, "deleteArticleResponse", response.data))
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

export function* favArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.favArticleData(actionTypes.FAV_ARTICLE_DATA, "favArticleResponse", response.data))
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
export function* unFavArticleSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.unFavArticleData(actionTypes.UNFAV_ARTICLE_DATA, "unfavArticleResponse", response.data))
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

export function* getTagsSaga(service: any, payload: object): any {
    try {

        const response = yield call(service, payload)
        if (response.status == "200" || response.status == "201" || response.status == "202") {
            yield put(articlesActions.getTagsData(actionTypes.GET_TAGS_DATA, "tags", response.data))
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