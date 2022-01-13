import TYPES from "../types";

export const getDTConfigs = (dtconfigs:any) => ({
    type: TYPES.GET_DTCONFIGS,
    payload: dtconfigs
})

export const getDTConfig = (dtconfig:any) => ({
    type: TYPES.GET_DTCONFIG,
    payload: dtconfig
})

export const createDTConfig = (msg:any) => ({
    type: TYPES.ADD_DTCONFIG,
    payload: msg
})

export const updateDTConfig = (msg:any) => ({
    type: TYPES.UPDATE_DTCONFIG,
    payload: msg
})

export const disableDTConfig = (msg:any) => ({
    type: TYPES.DISABLE_DTCONFIG,
    payload: msg
})

export const initDTConfig = () => ({
    type: TYPES.INIT_DTCONFIG
})