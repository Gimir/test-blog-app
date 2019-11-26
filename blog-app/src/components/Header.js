import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MainButton from './MainButton';
import AppTitle from './AppTitle';

const StyledHeader = styled.header`
    width: 100%;
    height: 150px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to='/' style={{color: '#fff'}}>Home</Link>
            <AppTitle>Test blog app</AppTitle>
            <Link to='/edit' style={{color: '#fff'}}>Add Post</Link>
        </StyledHeader>
       
    );
};

export default Header;