import React, {Component} from 'react'

import {StrongCategorie} from './styles'

class DetailPage extends Component{
    
    render(){
        const itemSelect = this.props.data.filter(item => item.keyNumber === Number(this.props.detailId))
        
        return(
            <>
                <h1>{itemSelect[0].title}</h1>
                <StrongCategorie>{itemSelect[0].categorie.charAt(0).toUpperCase() + itemSelect[0].categorie.slice(1)}</StrongCategorie> <br />
                <small>Date: {itemSelect[0].date}</small>
            </>
        )
    }
}

export default DetailPage;