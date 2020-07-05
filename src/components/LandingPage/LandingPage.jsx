import React, {Component} from 'react'

import {SecondaryTitle, PrimaryTitle, DateData, AllButton} from './styles';
import Searcher from '../Searcher/Searcher';
import {MainCard} from '../MainCard/MainCard';
import {ListOfCards} from '../ListOfCards/ListOfCards'

class LandingPage extends Component{
    render(){
        return(
            <>
                <div className="fluid-container">
                    <div className="row">
                        <div className="col-12 ml-3">

                            <SecondaryTitle>TitleLight</SecondaryTitle>
                            <PrimaryTitle>TitleMoreDark</PrimaryTitle>

                        </div>
                    </div>
                </div>

                <Searcher />
                    <div className="container m-3">
                        <h3><i>Last post </i></h3>
                        <p><DateData>Date: 19/09/08</DateData></p>
                    </div>
                <MainCard />
                    <div className="container m-3">
                        <h3 className="mb-5"><i>Categories</i></h3>
                    </div>
                <ListOfCards />
                    <div className="container m-3 pt-5 d-flex align-items-center justify-content-between">
                        <h3><i>Categories</i></h3>
                        <AllButton><strong>See all +</strong></AllButton>
                        
                    </div>
                <ListOfCards />
            </>
        )
    }
}

export default LandingPage;