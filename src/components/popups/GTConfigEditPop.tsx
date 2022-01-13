import React from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { checkEdit } from '../../controllers/GTConfigController'
import PopRangeLabel from '../PopRangeLabel'


const DTConfigEditPop = (props:any) => {
    const updateFunction = () => {
        if(checkEdit()){
            const id = props.model._id
            props.function(id, {
                min_price: $('#ipMinPrice').val(),
                max_price: $('#ipMaxPrice').val(),
                grid_number: $('#ipGridNumber').val(),
                grid_percent: $('#ipGridPercent').val(),
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
                    <button className='btn btn-primary w-100' onClick={updateFunction}><FontAwesomeIcon icon={faSave}/></button>
                </div>
            </div>
        </>
    )
}
export default DTConfigEditPop