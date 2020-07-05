import React from 'react'

import {CardContainer, SmallDescription, ImageContainer, ImageCard ,DescriptionContainer} from './style'

export const Card = () =>{
    return(
        <CardContainer className="col-6 col-sm-4 col-md-3 scienceColor">
            <ImageContainer>
                <ImageCard src="" alt=""/>
            </ImageContainer>

            <DescriptionContainer>
                <h5>Science</h5>
                <SmallDescription> <small> Lets talk abaout science in this coun All of this is much at all en la idea f</small></SmallDescription>
            </DescriptionContainer>
        </CardContainer>
    )
}