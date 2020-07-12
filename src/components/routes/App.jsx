import React, {Component, useState, Ref} from 'react';

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
import {NewPost} from '../NewPost/NewPost';
import {NewPostPage} from '../NewPostPage/NewPostPage'
const uniqid = require('uniqid')

export const App = () =>{   
    const refFavorite = React.createRef()

    const [bodyState, setBodyState] = useState({})
    const [keyNumberState, setKeyNumberState] = useState(0)
    const [categorieState, setCategorieState] = useState({
        business: false,
        technology: false,
        science: false
    })
    const [newPostState, setNewPostState] = useState({})
    const [favorites, setFavorites] = useState([])
    const [likeState, setLikeState] = useState(false)
    const [likesNumber, setLikesNumber] = useState(0)

    const handleFavorite = () =>{
        setLikeState(!likeState)
        if(likeState) setLikesNumber(likesNumber - 1)
        else setLikesNumber(likesNumber + 1)
    }
   

    const handleSubmit = (e) =>{
        setKeyNumberState(keyNumberState + 1)
            setNewPostState({
                id: uniqid(),
                title: undefined,
                keyNumber: keyNumberState,
                shortDescription: "Esta es una breve descripcion de la idea fundamental del conocimiento natural",
                date: `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}`,
                body: bodyState, 
                categorie: categorieState,
                likes: 0,
                favorite: false                
            })
        }

    const handleChangeEditor = (event, editor) =>{ 
        const data = editor.getData();
        setBodyState(data)
    }

    const handleChangeCheckbox = (e) =>{
        setCategorieState({...categorieState, [e.target.name]: e.target.checked})
    }

    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')

    return(
        <>
        {console.log(refFavorite.current)}

            <GlobalStyles />
            <Router >
            <Layaout />
                <Switch>
                    {
                        detailId 
                        ? <NewPostPage 
                            data={posts}
                            detailId={detailId}
                            handleFavorite={handleFavorite}
                            likeState={likeState}
                            likesNumber={likesNumber}
                            />
                        : <Route path="/" exact>
                                <LandingPage 
                                    postsData={posts}
                                    categoriesData={categories}
                                    refFavorite={refFavorite}
                                />  
                           </Route> 
                    }
                    
                    <Route exact path="/new-post/prueba"> 
                        <NewPostPage {...newPostState} /> 
                    </Route>
                    <Route exact path="/favorites" component={FavoritesPage}/>
                    <Route exact path="/new-post" >
                        <NewPost 
                            handleChangeEditor={handleChangeEditor}
                            handleChangeCheckbox={handleChangeCheckbox}
                            handleSubmit={handleSubmit}
                        />    
                    </Route>
                </Switch>
            </Router>
            <Footer />
            
        </>
    )
    
}


export default App;