import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import GlobalCoronaContainer from './Corona/Global/GlobalCoronaContainer'
import HomeContainer from './Corona/Home/HomeContainer'
import IndonesiaCoronaContainer from './Corona/Indonesia/IndonesiaCoronaContainer'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
export default function CoronaContainer() {
    return (
        <div className="container-fluid">
            <div className="row">
                <NavigationBar />
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeContainer}></Route>
                    <Route exact path="/global" component={GlobalCoronaContainer}></Route>
                    <Route exact path="/indonesia" component={IndonesiaCoronaContainer}></Route>
                </Switch>
                <Footer/>
            </div>
        </div>
    )
}
