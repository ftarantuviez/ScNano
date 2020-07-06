import React, {Component} from 'react'

import {SecondaryTitle, PrimaryTitle, DateData, AllButton} from './styles';
import Searcher from '../Searcher/Searcher';
import {MainCard} from '../MainCard/MainCard';
import {ListOfCards} from '../ListOfCards/ListOfCards';

import {posts, categories} from '../../api.json'


class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            postsState: [],
            postsCategories: []            
        };
    }

    componentDidMount(){
    
        this.timeoutId = setTimeout(() =>{
            this.setState({
                postsState: posts,
                postsCategories: categories
            })
        }, 3000)
    
    }

    componentWillUnmount(){
        clearInterval(this.timeoutId)
    }

    render(){
        let lastPost = this.state.postsState.filter(post => post.postOfTheDay === true)
        console.log(lastPost)
        return(

            <>
                <div className="fluid-container">
                    <div className="row">
                        <div className="col-12 ml-3">

                            <SecondaryTitle>Doctor en psicologia</SecondaryTitle>
                            <PrimaryTitle>Roberto Gonzales</PrimaryTitle>

                        </div>
                    </div>
                </div>

                <Searcher />
                    <div className="container m-3">
                        <h3><i>Last post </i></h3>
                        <p><DateData>Date: {lastPost[0] ? lastPost[0].date : 'date'}</DateData></p>
                    </div>
                <MainCard {...lastPost[0]}/>
                    <div className="container m-3">
                        <h3 className="mb-5"><i>Categories</i></h3>
                    </div>
                <ListOfCards data={this.state.postsCategories}/>
                    <div className="container m-3 pt-5 d-flex align-items-center justify-content-between">
                        <h3><i>Categories</i></h3>
                        <AllButton><strong>See all +</strong></AllButton> 
                    </div>
                <ListOfCards data={this.state.postsState}/>
            </>
        )
    }
}

export default LandingPage;