import React, {Component} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { GlobalStyles } from '../../GlobalStyles'

import Layaout from './Layaout'
import LandingPage from '../LandingPage/LandingPage'
import {Footer} from '../Footer/Footer'


class App extends Component{
    
    render()
    {
        return(
            <>

                <GlobalStyles />
                <Layaout />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                    </Switch>
                </BrowserRouter>

                <Footer />
               
            </>
        )
    }
}


export default App;