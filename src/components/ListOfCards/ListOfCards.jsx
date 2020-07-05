import React from 'react';

import {Card} from '../Card/Card';
import {ContainerOverflow} from './styled'

export const ListOfCards = () =>(
    <>
        <div className="fluid-container">
            <ContainerOverflow className="row">
                {[0, 1, 2].map(number => <Card key={number}/>)}

            </ContainerOverflow>
                
        </div>
    </>
)