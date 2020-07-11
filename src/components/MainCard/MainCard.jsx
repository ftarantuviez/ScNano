import React from 'react'

import {ImageContainer, ImageCard, ShortDescription, MainCardContainer, ParagraphShortDescription} from './styles'

export const MainCard = ({keyNumber, shortDescription, title, imageCard }) =>(
    <div className="container">
        <div className="row m-2 justify-content-lg-center">
            <MainCardContainer href={`?detail=${keyNumber}`} className="col-12 col-lg-9">
                <ShortDescription>
                    <h5 className="mb-1">{title}</h5>
                    <ParagraphShortDescription> {shortDescription} </ParagraphShortDescription>
                </ShortDescription>
                <ImageContainer>
                    <ImageCard src={imageCard} alt="imagen"/>
                </ImageContainer>
            </MainCardContainer>
        </div>
    </div>
)