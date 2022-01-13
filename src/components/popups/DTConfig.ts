import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import $, { camelCase } from "jquery"
import { DTConfig as Model } from "../../models/DTConfig"

export const Add = async () => {
    const MySwal = withReactContent(Swal)

    const Return = await MySwal.fire({
      customClass:{
        confirmButton: 'btn btn-primary col-12'
      },
      buttonsStyling: false,
        title: 'Multiple inputs',
        html:
          '<div>'+

            '<input class="d-none" />'+
            '<input id="none" class="swal2-input d-none" />'+ 

            '<label>Bot Name</label>'+
            '<input id="txtCryptoName" class="form-control" />'+ 

            '<label htmlFor="">Crypto</label>'+
            '<select id="cbCryptoSymbol" class="form-select">'+
                '<option value="BTCUSDT">Bitcoin</option>'+
                '<option value="WAVESUSDT">Waves</option>'+
                '<option value="DOTUSDT">Polkadot</option>'+
            '</select>'+

            '<label>Min Buy</label>'+
            '<input id="txtMinBuy" class="form-control" />'+ 

            '<label>Max Buy</label>'+
            '<input id="txtMaxBuy" class="form-control" />'+ 

            '<label>Amount Limit</label>'+
            '<input id="txtAmountLimit" class="form-control" />'+ 

          '</div>',

        confirmButtonText: 'Save',
        focusConfirm: false,
        preConfirm: () => {
          return ({
              CryptoName: String($('#txtCryptoName').val()),
              CryptoSymbol: String($('#cbCryptoSymbol').val()),
              MinBuy: String($('#txtMinBuy').val()),
              BotNextBuy: String($('#txtMaxBuy').val()),
              AmountLimit: String($('#txtAmountLimit').val()),
              BotActive: String(true)
            })
        }
      })
      return Return.value
}

export const Edit = async (dtconfig:Model) => {
  const MySwal = withReactContent(Swal)

  const Return = await MySwal.fire({
    customClass:{
      confirmButton: 'btn btn-primary col-12'
    },
    buttonsStyling: false,
      title: 'Multiple inputs',
      html:
        '<div>'+

          '<input class="d-none" />'+
          '<input id="none" class="swal2-input d-none" />'+ 

          '<label>Bot Name</label>'+
          `<input id="txtCryptoName" class="form-control" value="${dtconfig.bot_name}" disabled/>`+ 

          '<label htmlFor="">Crypto</label>'+
          `<select id="cbCryptoSymbol" value=${dtconfig.crypto_symbol} class="form-select" disabled>`+
              '<option value="BTCUSDT">Bitcoin</option>'+
              '<option value="WAVESUSDT">Waves</option>'+
              '<option value="DOTUSDT">Polkadot</option>'+
          '</select>'+

          '<label>Min Buy</label>'+
          '<div class="input-group">'+
            '<label class="input-group-text">USDT</label>' +
            `<input id="txtMinBuy" value=${dtconfig.bot_min_buy} class="form-control" />`+ 
          '</div>'+

          '<label>Max Buy</label>'+
          '<div class="input-group">'+
            '<label class="input-group-text">USDT</label>' +
            `<input id="txtMaxBuy" value=${dtconfig.bot_next_buy} class="form-control" />`+ 
          '</div>'+

          '<label>Amount Limit</label>'+
          '<div class="input-group">'+
            '<label class="input-group-text">USDT</label>' +
            `<input id="txtAmountLimit" value=${dtconfig.amount_limit} class="form-control" disabled/>`+ 
          '</div>'+


        '</div>',

      confirmButtonText: 'Save',
      focusConfirm: false,
      preConfirm: () => {
        return ({
            CryptoName: String($('#txtCryptoName').val()),
            CryptoSymbol: String($('#cbCryptoSymbol').val()),
            BotMinBuy: String($('#txtMinBuy').val()),
            BotNextBuy: String($('#txtMaxBuy').val()),
            AmountLimit: String($('#txtAmountLimit').val()),
            BotActive: String(true)
          })
      }
    })
    return Return.value
}

export const Disable = async () => {
  const MySwal = withReactContent(Swal)

  const Return = await MySwal.fire({
    customClass:{
      confirmButton: 'btn btn-success me-2',
      cancelButton: 'btn btn-secondary'
    },
    buttonsStyling: false,
      title: 'Multiple inputs',
      showCancelButton: true,
      confirmButtonText: 'Desactivar',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        return true
      }
      else {
        return false
      }
    })
    return Return
}
