import React, { useEffect } from 'react'
import PopInputLabel from '../PopInputLabel'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { connect } from 'react-redux'


const DTConfigPopup = ({props, dtconfig}:any) => {
    useEffect(() => {
        
    }, [dtconfig])
    if(dtconfig.bot_name == null){
    return (
        <div className="p-popup fbg-1"><label htmlFor=""> Prueba</label></div>
    )}
    return (
    <>
        <div className="p-bg d-none bgPop p-popup">
        </div>
        <div className="translate-middle d-none p-pop p-popup">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <h4>New Daily Trade Bot</h4>
                    </div>
                    <PopInputLabel 
                        class="col-md-12 mb-2" 
                        title="Bot Name"
                        type="text"
                        name="ipBotName"/>

                    <div className="col-md-12 mb-2">
                        <label htmlFor=''>Crypto</label>
                        <select id="cbCryptoSymbol" className="form-select">
                            <option value="BTCUSDT">Bitcoin</option>
                            <option value="WAVESUSDT">Waves</option>
                            <option value="DOTUSDT">Polkadot</option>
                        </select>
                    </div>

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
                        type="number"
                        name="ipAmountLimit"/>

                    <div className="col-md-12 mb-2">
                        <label className="form-label">Bot Percent</label>
                        <input type="range" className="form-range" min="0.5" max="100" step="0.5" id='ipBotPercent' required/>
                    </div>

                    <div className="col-md-12 mb-2">
                        <label className="form-label">Bot Decay</label>
                        <input type="range" className="form-range" min="0.5" max="100" step="0.5" id='ipBotDecay' required/>
                    </div>

                    <div className="col-md-12 mb-2">
                        <button className='btn btn-primary w-100 sw-add'><FontAwesomeIcon icon={faSave}/></button>
                    </div>
                </div>
            </div>
    </>
)}
const mapState = (state:any) => ({
    dtconfig: state.DTConfig.single
})
export default connect(mapState, null)(DTConfigPopup)