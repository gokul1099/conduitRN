import { applyMiddleware, createStore } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { persistCombineReducers, persistStore } from "redux-persist";
import { createLogger } from "redux-logger"
import createSagaMiddleware from "@redux-saga/core";

const config = {
    key: "root",
    storage: AsyncStorage,
    debug: true,
}
