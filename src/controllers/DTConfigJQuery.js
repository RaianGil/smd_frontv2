import $ from 'jquery'

export function popEdit(dtconfig){
    $('#ipBotName').val(String(dtconfig.bot_name))
    $('#cbCryptoSymbol').val(dtconfig.crypto_symbol)
    $('#ipMinBuy').val(dtconfig.bot_min_buy) 
    $('#ipNextBuy').val(dtconfig.bot_next_buy) 
    $('#ipBotAmount').val(dtconfig.bot_amount) 
    $('#ipAmountLimit').val(dtconfig.amount_limit) 
    $('#ipBotPercent').val(dtconfig.bot_percent) 
    $('#ipBotDecay').val(dtconfig.bot_decay) 

    $(".p-popup").show()
}