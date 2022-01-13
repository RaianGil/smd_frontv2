import React from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkEdit } from '../../controllers/STConfigController'


const DTConfigEditPop = (props:any) => {
    const updateFunction = () => {
        if(checkEdit()){
            const id = props.model._id
            props.function(id, {
                bot_buy: $('#ipBuy').val(),
                bot_limit_buy: $('#ipLimitBuy').val(),
                bot_sell: $('#ipSell').val(),
                bot_amount: $('#ipBotAmount').val(),
                amount_limit: $('#ipAmountLimit').val(),
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
                    <h4>{props.name}</h4>
                </div>
                    
                <div className="col-md-12 mb-2">
                    <label htmlFor=''>Crypto</label>
                    <select id="cbCryptoSymbol" className="form-select" disabled>
                        <option value="BTCUSDT">Bitcoin</option>
                        <option value="WAVESUSDT">Waves</option>
                        <option value="DOTUSDT">Polkadot</option>
                    </select>
                </div>
                <PopInputLabel 
                    class="col-md-4 mb-2" 
                    title="Bot Buy"
                    type="number"
                    name="ipBuy"/>

                <PopInputLabel 
                    class="col-md-4 mb-2" 
                    title="Bot Limit"
                    type="number"
                    name="ipLimitBuy"/>

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
                    type="text"
                    name="ipAmountLimit"/>
                <div className="col-md-12 mb-2">
                    <button className='btn btn-primary w-100' onClick={updateFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}
export default DTConfigEditPop