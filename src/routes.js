import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Header from './components/Header/Header'
import Sidenav from './components/SideNav/Sidenav'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Sidenav />
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/events" component={Home} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
