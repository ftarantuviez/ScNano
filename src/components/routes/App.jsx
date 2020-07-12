import React, {Component, useState, Ref} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyles } from '../../GlobalStyles'

import Layaout from './Layaout'
import LandingPage from '../LandingPage/LandingPage'
import {useLocalStorage} from '../Hooks/hook';
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import {Footer} from '../Footer/Footer'

import {posts, categories} from '../../api.json'
import {NewPost} from '../NewPost/NewPost';
import {NewPostPage} from '../NewPostPage/NewPostPage'
const uniqid = require('uniqid')

export const App = () =>{   
    
    const [bodyState, setBodyState] = useState({})
    const [keyNumberState, setKeyNumberState] = useState(0)
    const [categorieState, setCategorieState] = useState({
        business: false,
        technology: false,
        science: false
    })
    const [newPostState, setNewPostState] = useState({})
    const [savePost, setSavePost] = useState(false)
    const [likeState, setLikeState] = useState(false)
    const [likesNumber, setLikesNumber] = useState(0)
    const [favoritesSaved, setFavoritesSaved] = useLocalStorage('favorites', [])
    

    const handleFavorite = (e) =>{
        setLikeState(!likeState)
        if(likeState) setLikesNumber(likesNumber - 1)
        else setLikesNumber(likesNumber + 1)
    }

    const handleSavePost = e =>{
        setSavePost(!savePost)
        
        if(!savePost){
            setFavoritesSaved([...favoritesSaved, itemSelect[0]])
        } else{
            let favoriteDelete = favoritesSaved.filter(i => i.id !== itemSelect[0].id)
            setFavoritesSaved(favoriteDelete)
        }
        
    
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
    const itemSelect = posts.filter(item => item.keyNumber === Number(detailId))
    let favoritesToUse = JSON.parse(window.localStorage.getItem('favorites'))
    console.log(favoritesToUse)
    return(
        <>

            <GlobalStyles />
            <Router >
            <Layaout />
                <Switch>
                    {
                        detailId 
                        ? <NewPostPage 
                            data={itemSelect}
                            handleFavorite={handleFavorite}
                            likeState={likeState}
                            likesNumber={likesNumber}
                            saveState={savePost}
                            handleSave={handleSavePost}
                            />
                            : <Route path="/" exact>
                                <LandingPage 
                                    postsData={posts}
                                    categoriesData={categories}
                                />  
                           </Route> 
                    }
                    
                    <Route exact path="/new-post/prueba"> 
                        <NewPostPage {...newPostState} /> 
                    </Route>
                    <Route exact path="/favorites" > 
                        <FavoritesPage data={favoritesToUse || []}/>
                    </Route>
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