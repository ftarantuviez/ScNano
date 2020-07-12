import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {UnorderList, ContainerAbsolute, RowContainer} from './styles'

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
                <li onClick={this.props.liHandleClick}>
                    <Link to="/"> Home </Link>
                </li>
                <li onClick={this.props.liHandleClick}>
                    <Link to="/new-post"> New Post </Link>
                </li>
                <li onClick={this.props.liHandleClick}>
                    <Link to="/favorites"> Favorites </Link>
                </li>
                <li onClick={this.props.liHandleClick}>
                    <Link to="/"> Home </Link>
                </li>
            </UnorderList>
        </RowContainer>
    </ContainerAbsolute>

        
    )}
}

export default HeadMenu;