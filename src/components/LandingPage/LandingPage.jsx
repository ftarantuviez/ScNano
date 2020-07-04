import React, {Component} from 'react'

import {SecondaryTitle, PrimaryTitle, DateData} from './styles';
import Searcher from '../Searcher/Searcher';
import {MainCard} from '../MainCard/MainCard';
import {Card} from '../Card/Card'

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
                        <h3><i>Categories</i></h3>
                    </div>
                <Card />
            </>
        )
    }
}

export default LandingPage;