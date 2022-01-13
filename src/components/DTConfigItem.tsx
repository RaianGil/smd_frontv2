import React from 'react'
import '../css/index.css'
import { ButtonGroup, Button } from 'react-bootstrap'
import { faPowerOff, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DTConfigItem = (props:any) => (
    <div className='p-card w-99 mb-2 dbg-1'>
        <div className="row p-2">
            <div className="col-auto">
                <img src="https://bitcoin.org/img/icons/opengraph.png?1637078881" className="" alt="..." />
            </div>
            <div className="col-md-6 fbg-1 ">
                <label className='pt'><strong>{props.BotName}</strong></label>
                <label><strong>Crypto:</strong> <i>{props.CryptoSymbol}</i></label>
                <label><strong>Next Buy:</strong> <i>${props.NextBuy}</i></label>
                <label><strong>Min Buy:</strong> <i>${props.MinBuy}</i></label>
                <label><strong>Percent:</strong> <i>{props.Percent}%</i></label>
                <label><strong>Amount:</strong> <i>${props.Amount}</i></label>
                <label><strong>Amount Limit:</strong> <i>${props.AmountLimit}</i></label>
            </div>
            <div className="col-md-auto fp-right">
                <ButtonGroup>
                    <Button variant={props.isActive ? "primary": "secondary"} onClick={props.OnEdit} disabled={!props.isActive}><FontAwesomeIcon icon={faEdit}/></Button>
                    <Button variant={props.isActive ? "danger": "success"} onClick={props.OnDisabled}><FontAwesomeIcon icon={faPowerOff}/></Button>
                </ButtonGroup>
            </div>
        </div>

    </div>
)

export default DTConfigItem