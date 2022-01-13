import TYPES from "../types";

export const getGTConfigs = (gtconfigs:any) => ({
    type: TYPES.GET_GTCONFIGS,
    payload: gtconfigs
})

export const getGTConfig = (gtconfig:any) => ({
    type: TYPES.GET_GTCONFIG,
    payload: gtconfig
})

export const createGTConfig = (msg:any) => ({
    type: TYPES.ADD_GTCONFIG,
    payload: msg
})

export const updateGTConfig = (msg:any) => ({
    type: TYPES.UPDATE_GTCONFIG,
    payload: msg
})

export const disableGTConfig = (msg:any) => ({
    type: TYPES.DISABLE_GTCONFIG,
    payload: msg
})

export const initGTConfig = () => ({
    type: TYPES.INIT_GTCONFIG
})