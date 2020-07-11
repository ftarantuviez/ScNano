import React, { Children } from 'react'

export const NewPostPage = ({id, body, shortDescription, date}) =>{
    return(
        <>
            <div dangerouslySetInnerHTML={{ __html: body}} />
            
        </>
    )
}