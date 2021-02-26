import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NavBar(){
    return (
        <Nav>
            <h1>LAMBDA EATS</h1>

            <ul>
                <Link to='/'>Home</Link>
                <Link to='/'>Help</Link>
            </ul>
        </Nav>
    )
};

const Nav = styled.nav`
    max-width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3% 0 3%;
`