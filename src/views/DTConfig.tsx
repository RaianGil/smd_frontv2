import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addDTConfig, disableDTConfig, enableDTConfig, loadDTConfig, loadDTConfigs, modifyDTConfig } from '../redux/dispatchs/DTConfigDispatch'
import { removeEditMode, putEditMode } from '../redux/dispatchs/FunctionDispatch'
import { DTConfig as Model } from '../models/DTConfig'
import DTConfigItem from '../components/DTConfigItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import DTConfigBody from '../components/popups/DTConfigBody'
import { disable, getAll, openPopupAdd, showMsg } from '../controllers/DTConfigController'
import $ from 'jquery'
import PopBg from '../components/popups/PopBg'
import { initPopup } from '../controllers/generalController'

//let Actualizar = true
const DTConfig = ({GetDTConfigs, GetDTConfig, refresh, EnableDTConfig, PutEditMode, DisableDTConfig, dtconfigs, dtconfig, msg, RemoveEditMode, AddDTConfig, UpdateDTConfig}:any) => {
    initPopup()
    useEffect(()=> {
        getAll(GetDTConfigs, refresh)
    }, [])

    useEffect(() => {
        showMsg(msg)
    }, [msg])

    useEffect(() => {
        if (dtconfig.bot_name != null) {
            PutEditMode()
            $(".p-popup").show()
            $('.bgPop').click(function(){
                RemoveEditMode()
            })
        }
    }, [dtconfig])

    return (
        <> 
            <PopBg />
            <DTConfigBody />
            {
                dtconfigs.map((dtconfig:Model)=>(
                    <span key={dtconfig._id}>
                        <DTConfigItem
                            BotName={dtconfig.bot_name}
                            CryptoSymbol={dtconfig.crypto_symbol}
                            NextBuy={dtconfig.bot_next_buy}
                            MinBuy={dtconfig.bot_min_buy}
                            Percent={dtconfig.bot_percent}
                            Amount={dtconfig.bot_amount}
                            AmountLimit={dtconfig.amount_limit}
                            OnEdit={() => GetDTConfig(dtconfig._id)}
                            OnDisabled={dtconfig.bot_active? () => disable(() => DisableDTConfig(dtconfig._id)): () => EnableDTConfig(dtconfig._id)}
                            isActive={dtconfig.bot_active}/>
                    </span>
                ))
            }
            <button className='btn btn-primary fp-right' onClick={() => openPopupAdd()}><FontAwesomeIcon icon={faPlus} className='me-1'/>Add Bot</button>
        </>
    )
}

const mapState = (state:any) => ({
    dtconfigs: state.DTConfig.list,
    dtconfig: state.DTConfig.single,
    msg: state.DTConfig.msg,
    refresh: state.Function.refresh
})

const mapDispatch = (dispatch:any) => ({
    GetDTConfigs(){
      dispatch(loadDTConfigs())
    },
    AddDTConfig(dtcon:any){
        dispatch(addDTConfig(dtcon))
    },
    GetDTConfig(id:String){
        dispatch(loadDTConfig(id))
    },
    UpdateDTConfig(id:String, dtcon:any){
        dispatch(modifyDTConfig(id, dtcon))
    },
    DisableDTConfig(id:String){
        dispatch(disableDTConfig(id))
    },
    EnableDTConfig(id:String){
        dispatch(enableDTConfig(id))
    },
    PutEditMode(){
        dispatch(putEditMode())
    },
    RemoveEditMode(){
        dispatch(removeEditMode())
    }
})

export default connect(mapState, mapDispatch)(DTConfig)
