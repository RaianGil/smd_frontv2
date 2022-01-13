import React from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkAdd } from '../../controllers/DTConfigController'
import $ from 'jquery'
import ComboCryptoSymbol from '../ComboCryptoSymbol'

const DTConfigAdd = (props:any) => {
    const insertFunction = () => {
        if(checkAdd()){
            props.function({
                bot_name: $('#ipBotName').val(),
                crypto_symbol: $('#cbCryptoSymbol').val(),
                bot_buy: $('#ipBuy').val(),
                bot_buy_limit: $('#ipBuyLimit').val(),
                bot_sell: $('#ipSell').val(),
                bot_amount: $('#ipBotAmount').val(),
                amount_limit: $('#ipAmountLimit').val(),
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
                    <h4>New Simple Trade Bot</h4>
                </div>
                <PopInputLabel 
                    class="col-md-12 mb-2" 
                    title="Bot Name"
                    type="text"
                    name="ipBotName"/>
                <ComboCryptoSymbol />
                <PopInputLabel 
                    class="col-md-4 mb-2" 
                    title="Bot Buy"
                    type="number"
                    name="ipBuy"/>
                <PopInputLabel 
                    class="col-md-4 mb-2" 
                    title="Bot Buy Limit"
                    type="number"
                    name="ipBuyLimit"/>
                <PopInputLabel 
                    class="col-md-4 mb-2" 
                    title="Bot Sell"
                    type="number"
                    name="ipSell"/>
                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Bot Amount"
                    type="number"
                    name="ipBotAmount"/>
                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Amount Limit"
                    type="number"
                    name="ipAmountLimit"/>

                <div className="col-md-12 mb-2">
                    <button className='btn btn-primary w-100' onClick={insertFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}

export default DTConfigAdd