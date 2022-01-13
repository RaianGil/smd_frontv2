import { toast } from "react-toastify"
import $ from 'jquery'
import { Disable } from "../components/popups/DTConfig"

export const add = async(funct:any, send:any) =>{
    funct(send)
}

export const modify = () =>{

}

export const disable = async(Function:any) =>{
    const PopReturn = await Disable()
    if(PopReturn)
        Function()
}

export const getAll = (getFunction:any) => {
    getFunction()
}

export const showMsg = (msg:any) => {
    if(msg){
        console.log(msg)
        if(msg.succ)
            toast.success(msg.succ.msg)
        else if(msg.err)
            toast.error(msg.err.msg)
    }
}

export const openPopupAdd = () => {
    initConfig()
    $(".p-popup").fadeIn("fast", function(){
        $('#ipBotName').focus()
    })
}

export const loadConfig = (data:any) => {
    $('#cbCryptoSymbol').val(data.crypto_symbol)
    $('#ipBuy').val(data.bot_buy) 
    $('#ipLimitBuy').val(data.bot_limit_buy) 
    $('#ipSell').val(data.bot_sell) 
    $('#ipBotAmount').val(data.bot_amount) 
    $('#ipAmountLimit').val(data.amount_limit) 
}

function initConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipBuy').val('')
    $('#ipBuyLimit').val('')
    $('#ipSell').val('')
    $('#ipBotAmount').val('')
    $('#ipAmountLimit').val('')
}

export const checkAdd = () => {
    if($('#ipBotName').val() === "")
        return false
    if($('#ipBuy').val() === "")
        return false
    if($('#ipLimitBuy').val() === "")
        return false
    if($('#ipSell').val() === "")
        return false
    if($('#ipBotAmount').val() === "")
        return false
    if($('#ipAmountLimit').val() === "")
        return false
    return true
}

export const checkEdit = () => {
    if($('#ipBuy').val() === "")
        return false
    if($('#ipLimitBuy').val() === "")
        return false
    if($('#ipSell').val() === "")
        return false
    if($('#ipBotAmount').val() === "")
        return false
    if($('#ipAmountLimit').val() === "")
        return false
    return true
}