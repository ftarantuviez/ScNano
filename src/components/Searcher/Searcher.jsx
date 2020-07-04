import React, {Component} from 'react'

import {Input, SearcherContainer, IconSearch} from './styles'
import Icon from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon/search'

class Searcher extends Component{
    render(){
        const PlaceHolder = `Search your favorite` 
        return(
            <SearcherContainer className="fluid-container ml-3 mr-2">
                <div className="row">
                    <IconSearch className="col-1">
                        <Icon icon={search} />
                    </IconSearch>
                    <div className="col pl-0">
                        <Input type="text" placeholder={PlaceHolder}/>
                    </div>
                </div>
            </SearcherContainer>
        )
    }
}

export default Searcher;