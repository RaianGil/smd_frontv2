import axios from "axios";
import { createDTConfig, getDTConfigs, getDTConfig, updateDTConfig } from "../actions/DTConfigAction";
import { offRefresh, onRefresh } from "../actions/FunctionAction";

const API = process.env.API_HOST || "http://127.0.0.1:5000/api"

export const loadDTConfigs = () => {
    return function(dispatch:any) {
        axios
        .get(`${API}/DT/config`)
        .then((res) => {
            dispatch(getDTConfigs(res.data))
        })
        .catch(err => console.log(err))
    }
}

export const loadDTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .get(`${API}/DT/config/${id}`)
        .then((res) => dispatch(getDTConfig(res.data)))
        .catch(err => console.log(err))
    }
}

export const addDTConfig = (DTConfig:any) => {
    return function(dispatch:any) {
        axios
        .post(`${API}/DT/config`, DTConfig)
        .then((res) => {
            dispatch(createDTConfig(res.data))
            dispatch(loadDTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const modifyDTConfig = (id:String, dtconfig:any) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/DT/config/${id}`, dtconfig)
        .then((res) => {
            dispatch(updateDTConfig(res.data))
            dispatch(loadDTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const enableDTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/DT/config/${id}`, {bot_active: true})
        .then((res) => {
            dispatch(updateDTConfig(res.data))
            dispatch(loadDTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const disableDTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .delete(`${API}/DT/config/${id}`)
        .then((res) => {
            dispatch(updateDTConfig(res.data))
            dispatch(loadDTConfigs())
        })
        .catch(err => console.log(err))
    }
}