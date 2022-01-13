import axios from "axios";
import { createSTConfig, getSTConfigs, getSTConfig, updateSTConfig } from "../actions/STConfigAction";
import { offRefresh, onRefresh } from "../actions/FunctionAction";

const API = process.env.API_HOST || "http://127.0.0.1:5000/api"

export const loadSTConfigs = () => {
    return function(dispatch:any) {
        axios
        .get(`${API}/ST/config`)
        .then((res) => {
            dispatch(getSTConfigs(res.data))
        })
        .catch(err => console.log(err))
    }
}

export const loadSTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .get(`${API}/ST/config/${id}`)
        .then((res) => dispatch(getSTConfig(res.data)))
        .catch(err => console.log(err))
    }
}

export const addSTConfig = (STConfig:any) => {
    return function(dispatch:any) {
        axios
        .post(`${API}/ST/config`, STConfig)
        .then((res) => {
            dispatch(createSTConfig(res.data))
            dispatch(loadSTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const modifySTConfig = (id:String, stconfig:any) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/ST/config/${id}`, stconfig)
        .then((res) => {
            dispatch(updateSTConfig(res.data))
            dispatch(loadSTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const enableSTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/ST/config/${id}`, {bot_active: true})
        .then((res) => {
            dispatch(updateSTConfig(res.data))
            dispatch(loadSTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const disableSTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .delete(`${API}/ST/config/${id}`)
        .then((res) => {
            dispatch(updateSTConfig(res.data))
            dispatch(loadSTConfigs())
        })
        .catch(err => console.log(err))
    }
}