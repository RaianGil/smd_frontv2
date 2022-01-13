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
    $('#cbCryptoSymbol').val(data.crypto_symbol)
    $('#ipMinPrice').val(data.min_price) 
    $('#ipMaxPrice').val(data.max_price) 
    $('#ipGridNumber').val(data.grid_number) 
    $('#ipGridPercent').val(data.grid_percent) 
    $('#ipAmountLimit').val(data.amount_limit) 
}

export const openPopupAdd = () => {
    initConfig()
    $(".p-popup").fadeIn("fast", function(){
        $('#ipBotName').focus()
    })
}

function initConfig() {
    $('#ipBotName').val('')
    $('#cbCryptoSymbol').val('')
    $('#ipMinPrice').val('')
    $('#ipMaxPrice').val('')
    $('#ipGridNumber').val('')
    $('#ipGridPercent').val('0.5')
    $('#ipAmountLimit').val('')
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