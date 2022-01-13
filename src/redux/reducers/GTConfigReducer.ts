import TYPES from "../types";

const initialState = {
    list: [],
    single: {},
    msg: ""
}

const GTConfigReducer = (state = initialState, action:any) => {
    switch(action.type){
        case TYPES.GET_GTCONFIG:
            return {
                ...state,
                single: action.payload
            }
        case TYPES.INIT_GTCONFIG:
            return {
                ...state,
                single: [],
            }
        case TYPES.GET_GTCONFIGS:
            return {
                ...state,
                list: action.payload,
                msg: ""
            }
        case TYPES.ADD_GTCONFIG:
        case TYPES.UPDATE_GTCONFIG:
        case TYPES.DELETE_GTCONFIG:
        case TYPES.DISABLE_GTCONFIG:
            return {
                ...state,
                msg: action.payload
            }
        default:
            return state
    }
}

export default GTConfigReducer