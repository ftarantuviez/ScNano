import React, {Component} from 'react';
import {ListOfCards} from '../ListOfCards/ListOfCards'

class FavoritesPage extends Component{
    render(){
        return(
            <>
                <div className="container">
                    <h3>Favorites posts</h3>

                    <h5 className="mt-4 ml-2 mb-4">All favorites</h5>
                    <ListOfCards data={[]}/>
                    <h5 className="mt-4 ml-2 mb-4">Science favorites</h5>
                    <ListOfCards data={[]}/>
                    <h5 className="mt-4 ml-2 mb-4">Business favorites</h5>
                    <ListOfCards data={[]}/>
                    <h5 className="mt-4 ml-2 mb-4">Technology favorites</h5>
                    <ListOfCards data={[]}/>
                </div>

            </>
        )

    }
}

export default FavoritesPage;