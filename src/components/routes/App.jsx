import React, {Component, useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyles } from '../../GlobalStyles'

import Layaout from './Layaout'
import LandingPage from '../LandingPage/LandingPage'
import DetailPage from '../DetailPage/DetailPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
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
                <Router >
                    <Switch>
                        {
                            detailId 
                            ? <DetailPage 
                                data={posts}
                                detailId={detailId}
                                />
                            : <Route path="/" exact>
                                    <LandingPage 
                                        postsData={posts}
                                        categoriesData={categories}
                                    />  
                                </Route> 
                        }
                        
                        {/* <Route path="/favorites" exact component={FavoritesPage}/> */}
                    </Switch>
                </Router>
                <Footer />
               
            </>
        )
    }
}


export default App;