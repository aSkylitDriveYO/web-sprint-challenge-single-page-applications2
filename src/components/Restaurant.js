import React from 'react';
import styled from 'styled-components';

export default function Restaurant(props){

    console.log(props);

    const { name, qualities, time, fee, image } = props.values;

    return (
        <ResCard>
            <div className='image'>
                <Image src={image} alt=''></Image>
            </div>
            <TextContent>
                <h4>{name}</h4>
                <p>{qualities}</p>
                <MinFee>
                    <p>{time}</p>
                    <p>{fee}</p>
                </MinFee>
            </TextContent>
        </ResCard>
    )
}

const ResCard = styled.div`
    /* height: 15rem; */
    width: 20%;
    /* display: flex; */
    border: 1px solid black;
    margin-bottom: 3%;
    
`

const Image = styled.img`
    width: 100%;
    height: 30%;
`

const TextContent = styled.div`
    padding-left: 3%;
`

const MinFee = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-around;
    p{
        border: 2px solid black;
        padding: 3%;
    }
    
`