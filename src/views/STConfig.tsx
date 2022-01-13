import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addSTConfig, disableSTConfig, enableSTConfig, loadSTConfig, loadSTConfigs, modifySTConfig } from '../redux/dispatchs/STConfigDispatch'
import { removeEditMode, putEditMode } from '../redux/dispatchs/FunctionDispatch'
import { STConfig as Model } from '../models/STConfig'
import STConfigItem from '../components/STConfigItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import STConfigBody from '../components/popups/STConfigBody'
import { disable, getAll, openPopupAdd, showMsg } from '../controllers/STConfigController'
import $ from 'jquery'
import PopBg from '../components/popups/PopBg'
import { initPopup } from '../controllers/generalController'

//let Actualizar = true
const STConfig = ({GetSTConfigs, GetSTConfig, refresh, EnableSTConfig, PutEditMode, DisableSTConfig, stconfigs, stconfig, msg, RemoveEditMode, AddSTConfig, UpdateSTConfig}:any) => {
    initPopup()
    useEffect(()=> {
        getAll(GetSTConfigs)
    }, [])

    useEffect(() => {
        showMsg(msg)
    }, [msg])

    useEffect(() => {
        if (stconfig.bot_name != null) {
            PutEditMode()
            $(".p-popup").show()
            $('.bgPop').click(function(){
                RemoveEditMode()
            })
        }
    }, [stconfig])

    return (
        <> 
            <PopBg />
            <STConfigBody />
            {
                stconfigs.map((stconfig:Model)=>(
                    <span key={stconfig._id}>
                        <STConfigItem
                            BotName={stconfig.bot_name}
                            CryptoSymbol={stconfig.crypto_symbol}
                            BotBuy={stconfig.bot_buy}
                            BotLimitBuy={stconfig.bot_limit_buy}
                            BotSell={stconfig.bot_sell}
                            BotAmount={stconfig.bot_amount}
                            AmountLimit={stconfig.amount_limit}
                            OnEdit={() => GetSTConfig(stconfig._id)}
                            OnDisabled={stconfig.bot_active? () => disable(() => DisableSTConfig(stconfig._id)): () => EnableSTConfig(stconfig._id)}
                            isActive={stconfig.bot_active}/>
                    </span>
                ))
            }
            <button className='btn btn-primary fp-right add-stconfig' onClick={() => openPopupAdd()}><FontAwesomeIcon icon={faPlus} className='me-1'/>Add Bot</button>
        </>
    )
}

const mapState = (state:any) => ({
    stconfigs: state.STConfig.list,
    stconfig: state.STConfig.single,
    msg: state.STConfig.msg,
    refresh: state.Function.refresh
})

const mapDispatch = (dispatch:any) => ({
    GetSTConfigs(){
      dispatch(loadSTConfigs())
    },
    AddSTConfig(stcon:any){
        dispatch(addSTConfig(stcon))
    },
    GetSTConfig(id:String){
        dispatch(loadSTConfig(id))
    },
    UpdateSTConfig(id:String, stcon:any){
        dispatch(modifySTConfig(id, stcon))
    },
    DisableSTConfig(id:String){
        dispatch(disableSTConfig(id))
    },
    EnableSTConfig(id:String){
        dispatch(enableSTConfig(id))
    },
    PutEditMode(){
        dispatch(putEditMode())
    },
    RemoveEditMode(){
        dispatch(removeEditMode())
    }
})

export default connect(mapState, mapDispatch)(STConfig)
