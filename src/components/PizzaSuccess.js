import React from 'react';
import styled from 'styled-components';
import pizzatime from '../Assets/pizzaGif.gif';

export default function PizzaSuccess(props) {
    const { size, sauce, toppings, glutenFree, instructions, orderName } = props.details;

    return (
        <OrderCard>
            <h2>Success</h2> <br/>
            <div>
                <p>Your {!glutenFree} {size} pizza with {sauce} sauce and {toppings} following your instructions to {instructions} for {orderName} is on it's way!</p> <br/>
            </div>
            <h3>It's Pizza Time</h3>
            <img src={pizzatime} alt='pizza time'/>
        </OrderCard>
    )
}

const OrderCard = styled.div`
    width: 60%;
    border: 1px solid black;
    margin-bottom: 5%;
    h2{
        border-top: none!important;
        border-left: none!important;
        border-right: none!important;
        border-bottom: 1px solid black;
        padding: none!important;
        margin-top: 0!important;
        width: 100%!important;
    }
    div{
        width: 90%;
        text-align: center;
        margin: 0 auto;
    }
    h3{
        text-align: center;
    }
    img{
        max-width: 100%;
    }
`