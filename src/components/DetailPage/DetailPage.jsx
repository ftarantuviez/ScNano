import React, {Component} from 'react'

class DetailPage extends Component{
    render(){
        const itemSelect = this.props.data.filter(item => item.keyNumber === Number(this.props.detailId))
        console.log(itemSelect)
        return(
            <h1> H </h1>
        )
    }
}

export default DetailPage;