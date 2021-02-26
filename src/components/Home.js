import React from 'react';
import Header from './Header';
import Restaurants from './Restaurants';



export default function Home(props){
    return(
        <div>
            <Header />
            <h3>Food Delivery in Gotham City</h3>
            <Restaurants values={props.values} />
        </div>
    )
}