import React from 'react';
import Restaurant from './Restaurant';
import styled from 'styled-components';

export default function Restaurants(props){
    return(
        <ResContainer>
            {
                props.values.map(restaurant => {
                    return <Restaurant values={restaurant} />
                })
            }
        </ResContainer>
    )
}

const ResContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`