import request from "./client"


export function getRequest(data: object) {

    let inputRequest = data.paylod
    return request({ methos: "get", data: inputRequest })
}

export function postRequest(data: object) {

    let inputRequest = data.payload
    return request({ method: "post", data: inputRequest })
}

export function putRequest(data: object) {
    let inputRequest = data.payload
    return request({ method: "post", data: inputRequest })
}

export function deleteRequest(data: object) {
    let inputRequest = data.payload
    return request({ method: "delete", data: inputRequest })
}