import React from 'react';

import {Card} from '../Card/Card';
import {ContainerOverflow} from './styled';




export const ListOfCards = ({data}) =>(
    <>
        <div className="fluid-container">
            <ContainerOverflow className="row">
                {data.map(number => 
                    <Card key={number.keyNumber} 
                          {...number}
                    />
                )
                    
                }

            </ContainerOverflow>
                
        </div>
    </>
)