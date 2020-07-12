import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import {ic_favorite, ic_favorite_border} from 'react-icons-kit/md'

export const NewPostPage = ({detailId, data, handleFavorite, likeState, likesNumber}) =>{
    
    const itemSelect = data.filter(item => item.keyNumber === Number(detailId))

    return(
        <>
            <div className="container p-5 overflow-auto">
                <h2 className="mb-3">{itemSelect[0].title}</h2>
                <h6 className="mb-3">Category: {itemSelect[0].categorie}</h6>
                <div className="row mb-5 d-flex justify-content-between">
                    <small className="ml-2">Date: {itemSelect[0].date}</small>
                    <span>
                        {likeState 
                            ? <Icon onClick={handleFavorite} icon={ic_favorite} /> 
                            : <Icon onClick={handleFavorite} icon={ic_favorite_border} />
                        } {likesNumber}
                    </span>

                </div>
                    {itemSelect[0].body}
                    {/* <div dangerouslySetInnerHTML={{ __html: body}} /> */}
            </div>
            
        </>
    )
}