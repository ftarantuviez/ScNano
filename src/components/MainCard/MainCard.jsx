import React from 'react'

import {ShortDescription, MainCardContainer, ParagraphShortDescription} from './styles'

export const MainCard = (props) =>(
    <div className="container">
        <div className="row m-2 justify-content-lg-center">
            <MainCardContainer className="col-12 col-lg-9">
                <ShortDescription>
                    <h5 className="mb-1">Title MDR</h5>
                    <ParagraphShortDescription>  Lorem ipsum dolor sit amet orem ipsum dol <br /> consectetur adipisicing elit. Numquam. </ParagraphShortDescription>
                </ShortDescription>
                <div>
                    <img src="" alt="imagen"/>
                </div>
            </MainCardContainer>
        </div>
    </div>
)