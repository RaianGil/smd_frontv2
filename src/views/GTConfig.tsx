import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addGTConfig, disableGTConfig, enableGTConfig, loadGTConfig, loadGTConfigs, modifyGTConfig } from '../redux/dispatchs/GTConfigDispatch'
import { removeEditMode, putEditMode } from '../redux/dispatchs/FunctionDispatch'
import { GTConfig as Model } from '../models/GTConfig'
import GTConfigItem from '../components/GTConfigItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import GTConfigBody from '../components/popups/GTConfigBody'
import { disable, getAll, openPopupAdd, showMsg } from '../controllers/GTConfigController'
import $ from 'jquery'
import PopBg from '../components/popups/PopBg'
import { initPopup } from '../controllers/generalController'

//let Actualizar = true
const GTConfig = ({GetGTConfigs, GetGTConfig, refresh, EnableGTConfig, PutEditMode, DisableGTConfig, gtconfigs, gtconfig, msg, RemoveEditMode, AddGTConfig, UpdateGTConfig}:any) => {
    initPopup()
    useEffect(()=> {
        getAll(GetGTConfigs, refresh)
    }, [])

    useEffect(() => {
        showMsg(msg)
    }, [msg])

    useEffect(() => {
        if (gtconfig.bot_name != null) {
            PutEditMode()
            $(".p-popup").show()
            $('.bgPop').click(function(){
                RemoveEditMode()
            })
        }
    }, [gtconfig])

    return (
        <> 
            <PopBg />
            <GTConfigBody />
            {
                gtconfigs.map((gtconfig:Model)=>(
                    <span key={gtconfig._id}>
                        <GTConfigItem
                            BotName={gtconfig.bot_name}
                            CryptoSymbol={gtconfig.crypto_symbol}
                            MinPrice={gtconfig.min_price}
                            MaxPrice={gtconfig.max_price}
                            GridNumber={gtconfig.grid_number}
                            GridPercent={gtconfig.grid_percent}
                            AmountLimit={gtconfig.amount_limit}
                            OnEdit={() => GetGTConfig(gtconfig._id)}
                            OnDisabled={gtconfig.bot_active? () => disable(() => DisableGTConfig(gtconfig._id)): () => EnableGTConfig(gtconfig._id)}
                            isActive={gtconfig.bot_active}/>
                    </span>
                ))
            }
            <button className='btn btn-primary fp-right' onClick={() => openPopupAdd()}><FontAwesomeIcon icon={faPlus} className='me-1'/>Add Bot</button>
        </>
    )
}

const mapState = (state:any) => ({
    gtconfigs: state.GTConfig.list,
    gtconfig: state.GTConfig.single,
    msg: state.GTConfig.msg,
    refresh: state.Function.refresh
})

const mapDispatch = (dispatch:any) => ({
    GetGTConfigs(){
      dispatch(loadGTConfigs())
    },
    AddGTConfig(gtcon:any){
        dispatch(addGTConfig(gtcon))
    },
    GetGTConfig(id:String){
        dispatch(loadGTConfig(id))
    },
    UpdateGTConfig(id:String, gtcon:any){
        dispatch(modifyGTConfig(id, gtcon))
    },
    DisableGTConfig(id:String){
        dispatch(disableGTConfig(id))
    },
    EnableGTConfig(id:String){
        dispatch(enableGTConfig(id))
    },
    PutEditMode(){
        dispatch(putEditMode())
    },
    RemoveEditMode(){
        dispatch(removeEditMode())
    }
})

export default connect(mapState, mapDispatch)(GTConfig)
