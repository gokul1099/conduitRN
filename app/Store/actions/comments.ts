export function getComments(type: string, payload: any) {

    return {
        type,
        payload
    }
}

export function getCommentsData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}
export function addComment(type: string, payload: any) {

    return {
        type,
        payload
    }
}

export function addCommentData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}
export function deleteComments(type: string, payload: any) {

    return {
        type,
        payload
    }
}

export function deleteCommentsData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}