import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import {ic_favorite, ic_favorite_border} from 'react-icons-kit/md'
import {ic_bookmark_border, ic_bookmark} from 'react-icons-kit/md'

export const NewPostPage = ({data, handleFavorite, handleSave, saveState, likeState, likesNumber}) =>{
    
    return(
        <>
            <div className="container p-5 overflow-auto">
                <h2 className="mb-3">{data[0].title}</h2>
                <h6 className="mb-3">Category: {data[0].categorie}</h6>
                <div className="row mb-5 d-flex justify-content-between">
                    <small className="ml-2">Date: {data[0].date}</small>
                    <span>
                        {likeState 
                            ? <Icon onClick={handleFavorite} icon={ic_favorite} /> 
                            : <Icon onClick={handleFavorite} icon={ic_favorite_border} />
                        } {likesNumber}
                        {saveState 
                            ? <Icon onClick={handleSave} icon={ic_bookmark} /> 
                            : <Icon onClick={handleSave} icon={ic_bookmark_border} />
                        } 

                    </span>

                </div>
                    {data[0].body}
                    {/* <div dangerouslySetInnerHTML={{ __html: body}} /> */}
            </div>
            
        </>
    )
}