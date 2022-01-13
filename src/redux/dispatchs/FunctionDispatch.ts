import { setEditMode, unsetEditMode } from "../actions/FunctionAction"
import { initDTConfig } from "../actions/DTConfigAction"
import { initGTConfig } from "../actions/GTConfigAction"
import { initSTConfig } from "../actions/STConfigAction"

export const putEditMode = () => {
    return function(dispatch:any) {
        dispatch(setEditMode())
    }
}

export const removeEditMode = () => {
    return function(dispatch:any) {
        dispatch(initDTConfig())
        dispatch(initGTConfig())
        dispatch(initSTConfig())
        dispatch(unsetEditMode())
    }
}