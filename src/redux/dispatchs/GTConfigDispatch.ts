import axios from "axios";
import { createGTConfig, getGTConfigs, getGTConfig, updateGTConfig } from "../actions/GTConfigAction";

const API = process.env.API_HOST || "http://127.0.0.1:5000/api"

export const loadGTConfigs = () => {
    return function(dispatch:any) {
        axios
        .get(`${API}/GT/config`)
        .then((res) => {
            dispatch(getGTConfigs(res.data))
        })
        .catch(err => console.log(err))
    }
}

export const loadGTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .get(`${API}/GT/config/${id}`)
        .then((res) => dispatch(getGTConfig(res.data)))
        .catch(err => console.log(err))
    }
}

export const addGTConfig = (GTConfig:any) => {
    return function(dispatch:any) {
        axios
        .post(`${API}/GT/config`, GTConfig)
        .then((res) => {
            dispatch(createGTConfig(res.data))
            dispatch(loadGTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const modifyGTConfig = (id:String, gtconfig:any) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/GT/config/${id}`, gtconfig)
        .then((res) => {
            dispatch(updateGTConfig(res.data))
            dispatch(loadGTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const enableGTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .put(`${API}/GT/config/${id}`, {bot_active: true})
        .then((res) => {
            dispatch(updateGTConfig(res.data))
            dispatch(loadGTConfigs())
        })
        .catch(err => console.log(err))
    }
}

export const disableGTConfig = (id:String) => {
    return function(dispatch:any) {
        axios
        .delete(`${API}/GT/config/${id}`)
        .then((res) => {
            dispatch(updateGTConfig(res.data))
            dispatch(loadGTConfigs())
        })
        .catch(err => console.log(err))
    }
}