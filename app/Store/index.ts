import { applyMiddleware, compose, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistCombineReducers, persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import allReducers from "./reducers"
import onboardingReducer from "./reducers/onboarding";
import sagas from "./sagas"

const config = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["onboarding"],
    debug: true,
}
const middleWare = []
const sagaMiddleware = createSagaMiddleware()
middleWare.push(sagaMiddleware)
middleWare.push(createLogger())

console.log(onboardingReducer, "all")


const reducers = persistCombineReducers(config, onboardingReducer)
const enhancer = [applyMiddleware(...middleWare)]
const persistConfig = { ...enhancer }
const store = createStore(reducers, undefined, compose(...enhancer))
const persistor = persistStore(store, persistConfig, () => {

})
const configureStore = () => {
    return { persistor, store }
}

sagaMiddleware.run(sagas)
export default configureStore
