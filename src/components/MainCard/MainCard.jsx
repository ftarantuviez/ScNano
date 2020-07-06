import React from 'react'

import {ShortDescription, MainCardContainer, ParagraphShortDescription} from './styles'

export const MainCard = ({keyNumber, shortDescription, title }) =>(
    <div className="container">
        <div className="row m-2 justify-content-lg-center">
            <MainCardContainer href={`?detail=${keyNumber}`} className="col-12 col-lg-9">
                <ShortDescription>
                    <h5 className="mb-1">{title}</h5>
                    <ParagraphShortDescription> {shortDescription} </ParagraphShortDescription>
                </ShortDescription>
                <div>
                    <img src="" alt="imagen"/>
                </div>
            </MainCardContainer>
        </div>
    </div>
)