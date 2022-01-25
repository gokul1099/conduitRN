import actionTypes from "../actions/type";
export default function createReducer(initialState: any, handlers: any) {
    return function reducer(state = initialState, action: any) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    };
}

const initialState = {}

export const articlesReducer = createReducer(initialState, {

    [actionTypes.ERROR](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.ARTICLES_FROM_FOLLOWEES](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.ARTICLES_FROM_FOLLOWEES_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.GLOBAL_ARTICLES](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GLOBAL_ARTICLES_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.CREATE_ARTICLES](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.CREATE_ARTICLES_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.GET_ARTICLES](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GET_ARTICLES_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.UPDATE_ARTICLE](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.UPDATE_ARTICLE_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.DELECT_ARTICLE](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.DELECT_ARTICLE_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.FAV_ARTICLE](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.FAV_ARTICLE_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.UNFAV_ARTICLE](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.UNFAV_ARTICLE_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
    [actionTypes.GET_TAGS](state: any, action: any) {

        return {
            ...state
        }
    },
    [actionTypes.GET_TAGS_DATA](state: any, action: any) {
        return {
            ...state,
            [action.index]: action.data
        }
    },
})