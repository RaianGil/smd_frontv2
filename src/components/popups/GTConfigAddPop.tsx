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
            props.function({
                bot_name: $('#ipBotName').val(),
                crypto_symbol: $('#cbCryptoSymbol').val(),
                min_price: $('#ipMinPrice').val(),
                max_price: $('#ipMaxPrice').val(),
                grid_number: $('#ipGridNumber').val(),
                grid_percent: $('#ipGridPercent').val(),
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
                    class="col-md-6 mb-2" 
                    title="Min Price"
                    type="number"
                    name="ipMinPrice"/>

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Max Price"
                    type="number"
                    name="ipMaxPrice"/>

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Grid Number"
                    type="number"
                    name="ipGridNumber"/>

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Amount Limit"
                    type="text"
                    name="ipAmountLimit"/>

                <PopRangeLabel 
                    class="col-md-12 mb-2" 
                    title="Grid Percent"
                    name="ipGridPercent"/>

                <div className="col-md-12 mb-2">
                    <button className='btn btn-primary w-100' onClick={insertFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}

export default DTConfigAdd