import { types } from "@babel/core";
import actionTypes from "./type";


export function loader(index: string, data: boolean, type: string) {
    return {
        type: type,
        index,
        data
    }
}
export function signup(type: string, payload: any) {

    return {
        type,
        payload
    }
}

export function singupData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}

export function signin(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function singinData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}