import TYPES from "../types";

export const setEditMode = () => ({
    type: TYPES.SET_EDIT_MODE_ON
})

export const unsetEditMode = () => ({
    type: TYPES.SET_EDIT_MODE_OFF
})

export const onRefresh = () => ({
    type: TYPES.REFRESH_ON
})

export const offRefresh = () => ({
    type: TYPES.REFRESH_OFF
})