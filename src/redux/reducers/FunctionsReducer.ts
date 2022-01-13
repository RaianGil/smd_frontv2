import DTConfig from '../../views/DTConfig'
import TYPES from '../types'

const initialState = {
    edit_mode: false,
    refresh: true
}

const FunctionsReducer = (state = initialState, action:any) => {
    switch(action.type){
        case TYPES.SET_EDIT_MODE_ON:
            return {
                ...state,
                edit_mode: true
            }
        case TYPES.SET_EDIT_MODE_OFF:
            return {
                ...state,
                edit_mode: false
            }
        case TYPES.REFRESH_ON:
            return {
                ...state,
                refresh: true
            }
        case TYPES.REFRESH_OFF:
            return {
                ...state,
                refresh: false
            }
        
        default:
            return state
    }
}

export default FunctionsReducer