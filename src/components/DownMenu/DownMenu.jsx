import React, {Component} from 'react'

import { Icon } from 'react-icons-kit'
import {home3} from 'react-icons-kit/icomoon/home3'
import {menu} from 'react-icons-kit/icomoon/menu'
import {ic_favorite} from 'react-icons-kit/md/ic_favorite'
import {cancelCircle} from 'react-icons-kit/icomoon/cancelCircle'

import {CercleMenu} from './styles'

class DownMenu extends Component{
    
    state = {
        menu: false,
    }

    handleClick(){
        this.setState({menu: !this.state.menu})
    }
    
    render(){
        let nameClass = 'col';
        const sizeIcon = 20;
        let menuIcon, homeIcon, favoriteIcon, cancelIcon; 
        
        if(this.state.menu ){
            nameClass += ' menuOn';
            menuIcon = null;
            favoriteIcon =<Icon size={sizeIcon} icon={ic_favorite} />
            homeIcon = <Icon size={sizeIcon} icon={home3} />
            cancelIcon = <Icon size={14} icon={cancelCircle} />
        } else{
            nameClass += ' menuOff';
            menuIcon = <Icon size={sizeIcon} icon={menu} />
            favoriteIcon = null;
            homeIcon = null;
            cancelIcon = null;
        }  

        const urlParams = new window.URLSearchParams(window.location.search)
        const detailId = urlParams.get('detail')
        return(
           <CercleMenu 
            onClick={() => this.handleClick()} 
            className={nameClass}>

                    {menuIcon}
                   {detailId 
                        ? <a href="/"> {homeIcon} </a>
                        : <a href="#app">{homeIcon}</a>
                    }
                   <a href="/favorites"> {favoriteIcon} </a>
                   {cancelIcon}
                   

            </ CercleMenu>
            
        )
    }
}

export default DownMenu;