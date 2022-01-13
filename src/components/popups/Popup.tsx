import React from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Popup = () => {
    return (
        <div className='pp-12'>
            <div className='ppz-2 position-absolute top-50 start-50 translate-middle'>
                <div className='mb-2'>
                    <label htmlFor="">Bot Name</label>
                    <input className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Crypto</label>
                    <select className='form-select'>
                        <option value=''>Bitcoin</option>
                        <option value=''>Waves</option>
                        <option value=''>Polkadot</option>
                    </select>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Min Buy</label>
                    <input className='form-control' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Max Buy</label>
                    <input className='form-control' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="">Amount Limit</label>
                    <input className='form-control' />
                </div>
                <button className='btn btn-primary w-100 '><FontAwesomeIcon icon={faSave} className='me-1 far-1'/>Save</button>
            </div>
        </div>
    )
}

export default Popup
