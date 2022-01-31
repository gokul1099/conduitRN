import request from "./client"


export function getRequest(data: object) {
    return request({ method: "get", data: data.payload })
}

export function postRequest(data: object) {

    let inputRequest = data.payload
    return request({ method: "post", data: inputRequest })
}

export function putRequest(data: object) {
    let inputRequest = data.payload
    return request({ method: "put", data: inputRequest })
}

export function deleteRequest(data: object) {
    let inputRequest = data.payload
    return request({ method: "delete", data: inputRequest })
}