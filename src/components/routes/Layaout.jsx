import React, {Component, Children} from 'react';

import HeadMenu  from '../HeadMenu/HeadMenu'
import {StickA, StickB, HeadMenuIconsContainer, OptionsContainer, StickC} from './styles'
import DownMenu from '../DownMenu/DownMenu'

class Layaout extends Component{
    
    state = {
        menuOn: false
    }

    handleClick = () =>{
        this.setState({
            menuOn: !this.state.menuOn
        })
    } 
    
    render(){
        return(
            <>
                <HeadMenu menuToggle={this.state.menuOn}/>
                
                <HeadMenuIconsContainer className="fluid-container d-flex">
                    <OptionsContainer onClick={() => this.handleClick()} className="options d-block d-md-none">
                        <StickA className="mb-1"/>
                        <StickB className="mb-1"/>
                        <StickC />
                    </OptionsContainer>
                    <div className="another">
                    </div>
                </HeadMenuIconsContainer>

                    
                
                <DownMenu />
            </>
        )
    }
}
            
      
export default Layaout;