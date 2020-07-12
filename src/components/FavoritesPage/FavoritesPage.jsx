import React, {Component} from 'react';
import {ListOfCards} from '../ListOfCards/ListOfCards'

class FavoritesPage extends Component{
    render(){
        let scienceFilter = this.props.data.filter(e => e.categorie === "science")
        let businessFilter = this.props.data.filter(e => e.categorie === "business")
        let technologyFilter = this.props.data.filter(e => e.categorie === "technology")
        return(
            <>
                <div className="container">
                    <h3>Favorites posts</h3>

                    <h5 className="mt-4 ml-2 mb-4">All favorites</h5>
                    <ListOfCards data={this.props.data}/>
                    <h5 className="mt-4 ml-2 mb-4">Science favorites</h5>
                    <ListOfCards data={scienceFilter}/>
                    <h5 className="mt-4 ml-2 mb-4">Business favorites</h5>
                    <ListOfCards data={businessFilter}/>
                    <h5 className="mt-4 ml-2 mb-4">Technology favorites</h5>
                    <ListOfCards data={technologyFilter}/>
                </div>

            </>
        )

    }
}

export default FavoritesPage;