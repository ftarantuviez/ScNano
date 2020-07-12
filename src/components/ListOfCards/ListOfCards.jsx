import React from 'react';

import {Card} from '../Card/Card';
import {ContainerOverflow} from './styled';




export const ListOfCards = ({data, refFavorite}) =>(
    <>
        <div className="fluid-container">
            <ContainerOverflow className="row">
                {data.length !== 0 
                ? data.map(number => 
                    <Card key={number.keyNumber}
                          {...number}
                    />)
                : 'There is not posts here'     
                    
                }

            </ContainerOverflow>
                
        </div>
    </>
)