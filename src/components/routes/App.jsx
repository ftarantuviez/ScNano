import React, {Component} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { GlobalStyles } from '../../GlobalStyles'

import Layaout from './Layaout'


class App extends Component{
    render()
    {
        return(
            <>
               <GlobalStyles />
               <Layaout />
                
               
            </>
        )
    }
}


export default App;