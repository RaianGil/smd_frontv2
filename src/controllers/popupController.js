import $ from 'jquery'

$(document).ready(function(){
    $(".p-popup").hide()
    $(".p-popup").removeClass("d-none")

    $('.add-dtconfig').click(function(){
        initDTConfig()
        $(".p-popup").fadeIn("fast", function(){
            $('#ipBotName').focus()
        })
    })
    $('.add-stconfig').click(function(){
        initSTConfig()
        $(".p-popup").fadeIn("fast", function(){
            $('#ipBotName').focus()
        })
    })
    $('.add-gtconfig').click(function(){
        initGTConfig()
        $(".p-popup").fadeIn("fast", function(){
            $('#ipBotName').focus()
        })
    })
    $('#ipBotName').keypress(function(e) {
        if(e.which === 13 && $('#ipBotName').val() !== '')
            $('#cbCryptoSymbol').focus()
    })
    $('#cbCryptoSymbol').keypress(function(e) {
        if(e.which === 13 && $('#cbCryptoSymbol').val() !== '')
            $('#ipMinBuy').focus()
    })
    $('#ipMinBuy').keypress(function(e) {
        if(e.which === 13 && $('#ipMinBuy').val() !== '')
            $('#ipNextBuy').focus()
    })
    $('#ipNextBuy').keypress(function(e) {
        if(e.which === 13 && $('#ipNextBuy').val() !== '')
            $('#ipBotAmount').focus()
    })
    $('#ipBotAmount').keypress(function(e) {
        if(e.which === 13 && $('#ipBotAmount').val() !== '')
            $('#ipBotAmountLimit').focus()
    })
})

function initDTConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipMinBuy').val('') 
    $('#ipNextBuy').val('') 
    $('#ipBotAmount').val('') 
    $('#ipAmountLimit').val('') 
    $('#ipBotPercent').val("0.5") 
    $('#ipBotDecay').val("0.5") 
}

function initSTConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipBuy').val('')
    $('#ipBuyLimit').val('')
    $('#ipSell').val('')
    $('#ipBotAmount').val('')
    $('#ipAmountLimit').val('')
}

function initGTConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipMinPrice').val('')
    $('#ipMaxPrice').val('')
    $('#ipGridNumber').val('')
    $('#ipGridPercent').val('0.5')
    $('#ipAmountLimit').val('')
}