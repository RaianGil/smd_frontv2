import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import STConfigEditPop from './STConfigEditPop'
import STConfigAdd from './STConfigAddPop'
import { loadConfig } from '../../controllers/STConfigController'
import { addSTConfig, loadSTConfigs, modifySTConfig } from '../../redux/dispatchs/STConfigDispatch'


const STConfigBody = ({stconfig, AddSTConfig, ModifySTConfig}:any) => {
    useEffect(() => {
        loadConfig(stconfig)
    }, [stconfig])

    const add = async(data:any) =>{
        AddSTConfig(data)
    }

    const modify = async(data:any, id:string) => {
        ModifySTConfig(id, data)
    }

    return (
    <>
        <div className="translate-middle d-none p-pop p-popup">
            {
                stconfig.bot_name==null ? <STConfigAdd function={add}/> : <STConfigEditPop name={stconfig.bot_name} function={modify} model={stconfig}/>
            }
        </div>
    </>
)}

const mapState = (state:any) => ({
    stconfig: state.STConfig.single
})
const mapDispatch = (dispatch:any) => ({
    GetSTConfigs(){
        dispatch(loadSTConfigs())
    },
    AddSTConfig(stcon:any){
        dispatch(addSTConfig(stcon))
    },
    ModifySTConfig(stcon:any, id:any){
        dispatch(modifySTConfig(id, stcon))
    }
})
export default connect(mapState, mapDispatch)(STConfigBody)