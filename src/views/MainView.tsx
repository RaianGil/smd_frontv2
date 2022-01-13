import React from "react"
import { faPowerOff, faCog, faCalendarCheck, faBorderAll, faChartLine, faHistory, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import Lab from '../components/popups/Lab'
import PopConfirm from "../components/popups/PopConfirm"
import MenuButton from "../components/MenuButton"

const MainView = () => (
    <div className="">
        <div className="w-100 pt-3">
            <div className="input-group w-50 p-group fp-right">
                <MenuButton 
                    icon={faCalendarCheck}
                    class="col-md-4 pe-2 pb-2"
                    title="Daily Trade"
                    href="/dtconfig"/>

                <MenuButton 
                    icon={faChartLine}
                    class="col-md-4 pe-2 pb-2"
                    title="Simple Trade"
                    href="/stconfig"/>

                <MenuButton 
                    icon={faBorderAll}
                    class="col-md-4 pb-2"
                    title="Grid Trade"
                    href="/gtconfig"/>

                <div className="col-md-4 pe-2 pb-2">
                    <div className="fbg-1p fsp-1 tp-button" role="button">
                        <FontAwesomeIcon icon={faHistory}/>
                        <label htmlFor="" className="col-md-12">History</label>
                    </div>
                </div>

                <MenuButton 
                    icon={faChartBar}
                    class="col-md-4 pe-2 pb-2"
                    title="Analitycs"
                    href="/analitycs"/>

                <div className="col-md-4 pb-2">
                    <div className="fbg-1p fsp-1 tp-button" role="button">
                        <FontAwesomeIcon icon={faCog}/>
                        <label htmlFor="" className="col-md-12">Setting</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MainView