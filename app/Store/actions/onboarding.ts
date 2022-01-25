

export function loader(type: string, index: string, data: boolean) {
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


export function getUserDetail(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function getUserDetailData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}


export function updateUserDetail(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function updateUserDetailData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}


export function getProfile(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function getProfileData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}

export function followProfile(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function followProfileData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}
export function unFollowProfile(type: string, payload: any) {
    return {
        type,
        payload
    }
}

export function unFollowProfileData(type: string, index: string, data: object) {
    return {
        type,
        index,
        data
    }
}