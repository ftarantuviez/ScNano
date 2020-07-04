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


class App extends Component{
    render()
    {
        return(
            <>

                <GlobalStyles />
                <Layaout />
                <LandingPage />
               
            </>
        )
    }
}


export default App;