import React from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkAdd } from '../../controllers/DTConfigController'
import $ from 'jquery'
import ComboCryptoSymbol from '../ComboCryptoSymbol'
import PopRangeLabel from '../PopRangeLabel'

const DTConfigAdd = (props:any) => {
    const insertFunction = () => {
        if(checkAdd()){
            console.log($('ipBotPercent').val())
            props.function({
                bot_name: $('#ipBotName').val(),
                crypto_symbol: $('#cbCryptoSymbol').val(),
                bot_min_buy: $('#ipMinBuy').val(),
                bot_next_buy: $('#ipNextBuy').val(),
                bot_amount: $('#ipBotAmount').val(),
                amount_limit: $('#ipAmountLimit').val(),
                bot_percent: $('#ipBotPercent').val(),
                bot_decay: $('#ipBotDecay').val(),
                bot_active: "true"
            })
            $(".p-popup").fadeOut("fast")
        }
        else{
            console.log('no')
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-md-12 mb-2">
                    <h4>New Daily Trade Bot</h4>
                </div>
                <PopInputLabel 
                    class="col-md-12 mb-2" 
                    title="Bot Name"
                    type="text"
                    name="ipBotName"/>

                <ComboCryptoSymbol />

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Min Buy"
                    type="number"
                    name="ipMinBuy" />
                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Next Buy"
                    type="number"
                    name="ipNextBuy" />
                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Bot Amount"
                    type="number"
                    name="ipBotAmount" />
                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Amount Limit"
                    type="number"
                    name="ipAmountLimit" />
                <PopRangeLabel
                    class="col-md-12 mb-2"
                    title="Bot Percent"
                    name="ipBotPercent" />
                <PopRangeLabel
                    class="col-md-12 mb-2"
                    title="Bot Decay"
                    name="ipBotDecay" />

                <div className="col-md-12 mb-2">
                    <button className='btn btn-primary w-100' onClick={insertFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}

export default DTConfigAdd