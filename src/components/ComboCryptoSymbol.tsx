import React from "react";

const ComboCryptoSymbol = () => (
    <div className="col-md-12 mb-2">
        <label htmlFor=''>Crypto</label>
        <select id="cbCryptoSymbol" className="form-select">
            <option value="BTCUSDT">Bitcoin</option>
            <option value="WAVESUSDT">Waves</option>
            <option value="DOTUSDT">Polkadot</option>
        </select>
    </div>
)

export default ComboCryptoSymbol