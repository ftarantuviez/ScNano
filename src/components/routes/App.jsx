import React, {Component, useState} from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { GlobalStyles } from '../../GlobalStyles'

import Layaout from './Layaout'
import LandingPage from '../LandingPage/LandingPage'
import DetailPage from '../DetailPage/DetailPage'
import {Footer} from '../Footer/Footer'

import {posts, categories} from '../../api.json'


class App extends Component{
    
    render(){

    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    
        return(
            <>

                <GlobalStyles />
                <Layaout />
                {
                    detailId 
                    ? <DetailPage 
                        data={posts}
                        detailId={detailId}
                        />
                    : <LandingPage 
                        postsData={posts}
                        categoriesData={categories}
                    />
                }

                <Footer />
               
            </>
        )
    }
}


export default App;