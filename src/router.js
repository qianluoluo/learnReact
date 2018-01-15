import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import SiteIndex from './component/siteIndex'
import Login from './component/login'
import Register from './component/register'
import Reset from './component/reset'

class SiteRouter extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={SiteIndex} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/reset" component={Reset} />
                </div>
            </Router>
        )
    }
} 
export default SiteRouter;