import React, {Component} from 'react';

import {UnorderList, AnchorList, ContainerAbsolute, RowContainer} from './styles'

class HeadMenu extends Component {
    
render(){
    let className = 'fluid-container d-md-none'
    this.props.menuToggle 
    ? className += " menuOn"
    : className += " menuOff"
    return(

    <ContainerAbsolute className={className}>
        <RowContainer className="row">
            
            <UnorderList className="col-12">
                <li>
                    <AnchorList href="/"> Home </AnchorList>
                </li>
                <li>
                    <AnchorList href="/"> Home </AnchorList>
                </li>
                <li>
                    <AnchorList href="/"> Home </AnchorList>
                </li>
                <li>
                    <AnchorList href="/"> Home </AnchorList>
                </li>
            </UnorderList>
        </RowContainer>
    </ContainerAbsolute>

        
    )}
}

export default HeadMenu;