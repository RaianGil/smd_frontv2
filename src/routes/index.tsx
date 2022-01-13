import React from "react"
import {Switch, Route } from 'react-router-dom'
import DTConfig from "../views/DTConfig"
import MainView from "../views/MainView"
import DTConfigPopup from "../components/popups/DTConfigPopup"
import Main from "../views/Main"
import STConfig from "../views/STConfig"
import GTConfig from "../views/GTConfig"
import Analitycs from "../views/Analitycs"

const Routes = () => (
    <>
        <Switch>
            <Route path="/zzz" component={DTConfigPopup} />
            <Route path="/analitycs" component={Analitycs} />
            <Route path="/dtconfig" component={DTConfig} />
            <Route path="/gtconfig" component={GTConfig} />
            <Route path="/stconfig" component={STConfig} />
            <Route path="/" component={MainView} />
        </Switch>
    </>
)

export default Routes