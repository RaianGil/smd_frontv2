import TYPES from "../types";

export const getSTConfigs = (stconfigs:any) => ({
    type: TYPES.GET_STCONFIGS,
    payload: stconfigs
})

export const getSTConfig = (stconfig:any) => ({
    type: TYPES.GET_STCONFIG,
    payload: stconfig
})

export const createSTConfig = (msg:any) => ({
    type: TYPES.ADD_STCONFIG,
    payload: msg
})

export const updateSTConfig = (msg:any) => ({
    type: TYPES.UPDATE_STCONFIG,
    payload: msg
})

export const disableSTConfig = (msg:any) => ({
    type: TYPES.DISABLE_STCONFIG,
    payload: msg
})

export const initSTConfig = () => ({
    type: TYPES.INIT_STCONFIG
})