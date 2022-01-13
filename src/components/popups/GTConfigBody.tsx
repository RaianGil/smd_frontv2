import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GTConfigEditPop from './GTConfigEditPop'
import GTConfigAdd from './GTConfigAddPop'
import { loadConfig } from '../../controllers/GTConfigController'
import { addGTConfig, loadGTConfigs, modifyGTConfig } from '../../redux/dispatchs/GTConfigDispatch'


const GTConfigBody = ({gtconfig, AddGTConfig, ModifyGTConfig}:any) => {
    useEffect(() => {
        loadConfig(gtconfig)
    }, [gtconfig])

    const add = async(data:any) =>{
        AddGTConfig(data)
    }

    const modify = async(id:string, data:any) => {
        ModifyGTConfig(id, data)
    }

    return (
    <>
        <div className="translate-middle d-none p-pop p-popup">
            {
                gtconfig.bot_name==null ? <GTConfigAdd function={add}/> : <GTConfigEditPop name={gtconfig.bot_name} function={modify} model={gtconfig}/>
            }
        </div>
    </>
)}

const mapState = (state:any) => ({
    gtconfig: state.GTConfig.single
})
const mapDispatch = (dispatch:any) => ({
    GetGTConfigs(){
        dispatch(loadGTConfigs())
    },
    AddGTConfig(stcon:any){
        dispatch(addGTConfig(stcon))
    },
    ModifyGTConfig(id:any, gtcon:any){
        dispatch(modifyGTConfig(id, gtcon))
    }
})
export default connect(mapState, mapDispatch)(GTConfigBody)