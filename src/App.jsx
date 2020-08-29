import React from "react"
import Account from "./Account"
import Application from "./Application"
import Dashboard from "./Dashboard"
import LandingPage from "./LandingPage"
import Maintenance from "./Maintenance"
import Marketing from "./Marketing"
import Page from "./Page"
import Permision from "./Permision"
import Role from "./Role"
import ThemeEditor from "./ThemeEditor"
import User from "./User"
import {Switch, Route, Redirect} from "react-router-dom"


const App = () =>
{
    return (
        <>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/landingpage" component={LandingPage} />
            <Route exact path="/maintenance" component={Maintenance} />
            <Route exact path="/marketing" component={Marketing} />
            <Route exact path="/page" component={Page} />
            <Route exact path="/permision" component={Permision} />
            <Route exact path="/role" component={Role} />
            <Route exact path="/theme" component={ThemeEditor} />
            <Route exact path="/user" component={User} />
            <Redirect to="/" />
        </Switch>
        </>
    )
}

export default App;

