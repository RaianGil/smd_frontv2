import { toast } from "react-toastify"
import $ from 'jquery'
import { timeout } from "./TimeOut"
import { Disable } from "../components/popups/DTConfig"

let actualizar = true
export const add = async(funct:any, send:any, getFunction:any) =>{
    funct(send)
    actualizar = true
    await timeout(100)
    getFunction()
}

export const modify = () =>{

}

export const disable = async(Function:any) =>{
    const PopReturn = await Disable()
    if(PopReturn)
        Function()
}

export const getAll = (getFunction:any, refresh:any) => {
    getFunction()
}

export const openPopupAdd = () => {
    initConfig()
    $(".p-popup").fadeIn("fast", function(){
        $('#ipBotName').focus()
    })
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

export const loadConfig = (data:any) => {
    $('#lblBotName').val(data.bot_name)
    $('#cbCryptoSymbol').val(data.crypto_symbol)
    $('#ipMinBuy').val(data.bot_min_buy) 
    $('#ipNextBuy').val(data.bot_next_buy) 
    $('#ipBotAmount').val(data.bot_amount) 
    $('#ipAmountLimit').val(data.amount_limit) 
    $('#ipBotPercent').val(data.bot_percent) 
    $('#ipBotDecay').val(data.bot_decay) 
}

function initConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipMinBuy').val('') 
    $('#ipNextBuy').val('') 
    $('#ipBotAmount').val('') 
    $('#ipAmountLimit').val('') 
    $('#ipBotPercent').val("0.5") 
    $('#ipBotDecay').val("0.5") 
}


export const checkAdd = () => {
    if($('#ipBotName').val() === "")
        return false
    if($('#cbCryptoSymbol').val() === "")
        return false
    if($('#ipMinBuy').val() === "")
        return false
    if($('#ipNextBuy').val() === "")
        return false
    if($('#ipBotAmount').val() === "")
        return false
    if($('#ipAmountLimit').val() === "")
        return false
    if($('#ipBotPercent').val() === "")
        return false
    if($('#ipBotDecay').val() === "")
        return false
    return true
}

export const checkEdit = () => {
    if($('#ipMinBuy').val() === "")
        return false
    if($('#ipNextBuy').val() === "")
        return false
    if($('#ipBotAmount').val() === "")
        return false
    if($('#ipAmountLimit').val() === "")
        return false
    if($('#ipBotPercent').val() === "")
        return false
    if($('#ipBotDecay').val() === "")
        return false
    return true
}