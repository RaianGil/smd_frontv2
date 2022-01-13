import TYPES from "../types";

const initialState = {
    list: [],
    single: {},
    msg: ""
}

const STConfigReducer = (state = initialState, action:any) => {
    switch(action.type){
        case TYPES.GET_STCONFIG:
            return {
                ...state,
                single: action.payload
            }
        case TYPES.INIT_STCONFIG:
            return {
                ...state,
                single: [],
            }
        case TYPES.GET_STCONFIGS:
            return {
                ...state,
                list: action.payload,
                msg: ""
            }
        case TYPES.ADD_STCONFIG:
        case TYPES.UPDATE_STCONFIG:
        case TYPES.DELETE_STCONFIG:
        case TYPES.DISABLE_STCONFIG:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }
}

export default STConfigReducer