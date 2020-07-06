import React from 'react';

import {Card} from '../Card/Card';
import {ContainerOverflow} from './styled'

const arrayOfColors = [
    {
        id: 0,
        classColor: 'scienceColor'
    },
    {
        id: 1,
        classColor: 'businessColor'
    },
    {
        id: 2,
        classColor: 'technologyColor'
    }
]


export const ListOfCards = () =>(
    <>
        <div className="fluid-container">
            <ContainerOverflow className="row">
                {arrayOfColors.map(number => 
                    <Card key={number.id} 
                          classColor={number.classColor}
                    />
                )
                    
                }

            </ContainerOverflow>
                
        </div>
    </>
)