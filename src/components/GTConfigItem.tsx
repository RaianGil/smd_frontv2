import React from 'react'
import '../css/index.css'
import { ButtonGroup, Button } from 'react-bootstrap'
import { faPowerOff, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GTConfigItem = (props:any) => (
    <div className='p-card w-99 mb-2 dbg-1'>
        <div className="row p-2">
            <div className="col-auto">
                <img src="https://bitcoin.org/img/icons/opengraph.png?1637078881" className="" alt="..." />
            </div>
            <div className="col-md-6 fbg-1 ">
                <label className='pt'><strong>{props.BotName}</strong></label>
                <label><strong>Crypto:</strong> <i>{props.CryptoSymbol}</i></label>
                <label><strong>Min Price:</strong> <i>${props.MinPrice}</i></label>
                <label><strong>Max Price:</strong> <i>${props.MaxPrice}</i></label>
                <label><strong>Grid Number:</strong> <i>{props.GridNumber}</i></label>
                <label><strong>Grid Percent:</strong> <i>{props.GridPercent}%</i></label>
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

export default GTConfigItem