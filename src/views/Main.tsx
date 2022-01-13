import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Main = () => {
    const Prueba2 = () => {

    }

    return (
        <>
            <div>
                <button className='btn btn-primary btn-p' onClick={() => Prueba2()}><FontAwesomeIcon icon={faPlus} className='me-1'/>Add Bot</button>
            </div>
        </>
    )
}

export default Main
