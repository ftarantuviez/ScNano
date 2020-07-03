import React, {Component} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {GlobalStyles} from '../GlobalStyles'

import Layaout from './routes/Layaout'
import {Main} from '../pages/main'

class App extends Component{
    render()
    {
        return(
            <>
               <GlobalStyles />
               <Layaout />
               <Main />
            </>
        )
    }
}


export default App;