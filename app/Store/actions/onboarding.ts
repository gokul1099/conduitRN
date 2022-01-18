import { types } from "@babel/core";
import actionTypes from "./type";


export function loader(type: string, index: string, data: object) {
    return {
        type: type,
        index,
        data
    }
}
export function errors(type: string, index: string, data: object) {
    return {
        type: type,
        index,
        data
    }
}
export function isLoggedin(type: string, index: string, data: boolean) {
    return {
        type,
        index, data
    }
}

export function signup(type: string, payload: any) {

    return {
        type,
        payload
    }
}

export function singupData(type: string, index: string, data: object) {
    console.log(data, "from data action")
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
    console.log(type)
    return {
        type,
        index,
        data
    }
}