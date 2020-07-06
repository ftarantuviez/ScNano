import React from 'react'

import { Link } from 'react-router-dom'
import {CardContainer, SmallDescription, ImageContainer, ImageCard ,DescriptionContainer} from './style'


export const Card = ({classColor, title, shortDescription, date, keyNumber}) =>{
    let clases = "col-6 col-sm-4 col-md-3 "
    let nameClass = clases + classColor;

    return(
          <CardContainer href={`?detail=${keyNumber}`} className={nameClass} >
            <ImageContainer>
               <img src="" alt="Ima"/>
            </ImageContainer>
            <DescriptionContainer>
                <small>{date}</small>
                <h5>{title}</h5>
                <SmallDescription> <small> {shortDescription}</small></SmallDescription>
            </DescriptionContainer>
        </CardContainer>
    )
}