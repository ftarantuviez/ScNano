import React from 'react'

import {CardContainer, SmallDescription, ImageContainer, ImageCard ,DescriptionContainer} from './style'
import {business} from '../../images/business.png'

export const Card = ({classColor}) =>{
    let clases = "col-6 col-sm-4 col-md-3 "
    let nameClass = clases + classColor;
    return(
          <CardContainer className={nameClass} >
            <ImageContainer>
               <img src="" alt="Ima"/>
            </ImageContainer>

            <DescriptionContainer>
                <h5>Science</h5>
                <SmallDescription> <small> Lets talk abaout science in this coun All of this is much at all en la idea f</small></SmallDescription>
            </DescriptionContainer>
        </CardContainer>
    )
}