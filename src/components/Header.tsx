import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEyeSlash, faHome } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = (props:any) => (
    <>
        <div className="nav-p w-100 p-2 bgp-dark">
            <h5>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className='me-3 fbg-1'/>
                </Link>
            </h5>
            <h5 className='fbg-1'>SMD Cash</h5>
            <h5 className='fbg-1-d il-1'><FontAwesomeIcon icon={faEyeSlash} /></h5>
        </div>
        <div className="mtp-1"></div>
    </>
)

const mapDispatch = (dispatch:any) => ({
    
})


export default connect(null, mapDispatch)(Header)