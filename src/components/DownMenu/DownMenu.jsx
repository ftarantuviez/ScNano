import React, {Component} from 'react'
import { Icon } from 'react-icons-kit'
import {home3} from 'react-icons-kit/icomoon/home3'

import {DownMenuContainer, DownMenuRow, DownMenuCol} from './styles'

class DownMenu extends Component{
    render(){
        return(
    
            <DownMenuContainer className="fluid-container">
                <DownMenuRow className="row">
                    <DownMenuCol className="col-12">
                        <Icon icon={home3}/>
                        <Icon icon={home3}/>
                        <Icon icon={home3}/>
                        <Icon icon={home3}/>
                    </DownMenuCol>
                </DownMenuRow>
            </DownMenuContainer>
        )
    }
}

export default DownMenu;