import TYPES from "../types";

const initialState = {
    list: [],
    single: {},
    msg: ""
}

const DTConfigReducer = (state = initialState, action:any) => {
    switch(action.type){
        case TYPES.GET_DTCONFIG:
            return {
                ...state,
                single: action.payload
            }
        case TYPES.INIT_DTCONFIG:
            return {
                ...state,
                single: [],
            }
        case TYPES.GET_DTCONFIGS:
            return {
                ...state,
                list: action.payload,
                msg: ""
            }
        case TYPES.ADD_DTCONFIG:
        case TYPES.UPDATE_DTCONFIG:
        case TYPES.DELETE_DTCONFIG:
        case TYPES.DISABLE_DTCONFIG:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }
}

export default DTConfigReducer