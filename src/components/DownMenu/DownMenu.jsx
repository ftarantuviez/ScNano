import React, {Component} from 'react'
import { Icon } from 'react-icons-kit'
import {home3} from 'react-icons-kit/icomoon/home3'
import {menu} from 'react-icons-kit/icomoon/menu'
import {ic_favorite} from 'react-icons-kit/md/ic_favorite'

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
        let menuIcon = <Icon size={sizeIcon} icon={menu} />
        let homeIcon = <Icon size={sizeIcon} icon={home3} />
        let favoriteIcon = <Icon size={sizeIcon} icon={ic_favorite} />

        if(this.state.menu ){
            nameClass += ' menuOn';
            menuIcon = null;
            favoriteIcon =<Icon size={sizeIcon} icon={home3} />
            homeIcon = <Icon size={sizeIcon} icon={home3} />

        } else{
            nameClass += ' menuOff';
            menuIcon = <Icon size={sizeIcon} icon={menu} />
            favoriteIcon = null;
            homeIcon = null;
        }  

        return(

           <CercleMenu 
            onClick={() => this.handleClick()} 
            className={nameClass}>

                    {menuIcon}
                    {favoriteIcon}
                    {homeIcon}

            </ CercleMenu>
            
        )
    }
}

export default DownMenu;