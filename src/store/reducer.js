import {
    SHOW_HIDE_CONTENT,
    RIGHT_CLICK,
    LEFT_CLICK,
    GET_ACCORDION_INFOS_FAILED,
    GET_ACCORDION_INFOS_SUCCESS,
} from './actionTypes'

export const initialState = {
    accordionData: [],
    reqPending: false,
    reqErrorMessage: '',
    accordionContentToggle: false,
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ACCORDION_INFOS_SUCCESS:
            return {
                ...state,
                pending: false,
                accordionData: [...action.load]
            }
        case GET_ACCORDION_INFOS_FAILED:
            return {
                ...state,
                pending: true,
                errorMessage: 'Oops 404 error'
            }
        case SHOW_HIDE_CONTENT:
            return {
                ...state,
                accordionContentToggle: !state.accordionContentToggle
            }
        case RIGHT_CLICK:
            return {
                currentPageIndex: state.currentPageIndex + 1
            }
        case LEFT_CLICK:
            return {
                currentPageIndex: state.currentPageIndex - 1
            }
        default:
            return state
    }
}