import React from 'react';
import Header from './Header';
import Restaurants from './Restaurants';



export default function Home(props) {
    return(
        <div>
            <Header />
            <h3>Food Delivery in Phoenix</h3>
            <Restaurants values={props.values} />
        </div>
    )
}