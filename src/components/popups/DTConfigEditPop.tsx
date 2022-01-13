import React from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkEdit } from '../../controllers/DTConfigController'
import PopRangeLabel from '../PopRangeLabel'
import ComboCryptoSymbol from '../ComboCryptoSymbol'


const DTConfigEditPop = (props:any) => {
    const updateFunction = () => {
        if(checkEdit()){
            const id = props.model._id
            props.function(id, {
                bot_min_buy: $('#ipMinBuy').val(),
                bot_next_buy: $('#ipNextBuy').val(),
                bot_amount: $('#ipBotAmount').val(),
                amount_limit: $('#ipAmountLimit').val(),
                bot_percent: $('#ipBotPercent').val(),
                bot_decay: $('#ipBotDecay').val()
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
                    
                <ComboCryptoSymbol />

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Min Buy"
                    type="number"
                    name="ipMinBuy"/>

                <PopInputLabel 
                    class="col-md-6 mb-2" 
                    title="Next Buy"
                    type="number"
                    name="ipNextBuy"/>

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

                <PopRangeLabel
                    class="col-md-12 mb-2"
                    title="Bot Percent"
                    name="ipBotPercent" />

                <PopRangeLabel
                    class="col-md-12 mb-2"
                    title="Bot Decay"
                    name="ipBotDecay" />

                <div className="col-md-12 mb-2">
                    <button className='btn btn-primary w-100' onClick={updateFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}
export default DTConfigEditPop