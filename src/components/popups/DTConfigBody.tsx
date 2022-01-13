import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DTConfigEditPop from './DTConfigEditPop'
import DTConfigAdd from './DTConfigAddPop'
import { loadConfig } from '../../controllers/DTConfigController'
import { addDTConfig, loadDTConfigs, modifyDTConfig } from '../../redux/dispatchs/DTConfigDispatch'
import { timeout } from '../../controllers/TimeOut'


const DTConfigBody = ({dtconfig, AddDTConfig, ModifyDTConfig, GetDTConfigs}:any) => {
    useEffect(() => {
        loadConfig(dtconfig)
    }, [dtconfig])

    const add = async(data:any) =>{
        AddDTConfig(data)
        await timeout(100)
        GetDTConfigs()
    }

    const modify = async(data:any, id:string) => {
        ModifyDTConfig(id, data)
        await timeout(100)
        GetDTConfigs()
    }

    return (
    <>
        <div className="translate-middle d-none p-pop p-popup">
            {
                dtconfig.bot_name==null ? <DTConfigAdd function={add}/> : <DTConfigEditPop name={dtconfig.bot_name} function={modify} model={dtconfig}/>
            }
        </div>
    </>
)}

const mapState = (state:any) => ({
    dtconfig: state.DTConfig.single
})
const mapDispatch = (dispatch:any) => ({
    GetDTConfigs(){
        dispatch(loadDTConfigs())
    },
    AddDTConfig(dtcon:any){
        dispatch(addDTConfig(dtcon))
    },
    ModifyDTConfig(dtcon:any, id:any){
        dispatch(modifyDTConfig(id, dtcon))
    }
})
export default connect(mapState, mapDispatch)(DTConfigBody)