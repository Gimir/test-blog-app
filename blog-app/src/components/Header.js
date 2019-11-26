import React from 'react';
import styled from 'styled-components';

import AppTitle from './AppTitle';

const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const Header = ({linkHandlers}) => {
    return (
        <StyledHeader>
            <a href='/' onClick={e => {
                e.preventDefault();
                linkHandlers.onGoHomeHandler();
            }}>Home</a>
            <AppTitle>Test blog app</AppTitle>
            <a href='/edit' onClick={e => {
                e.preventDefault();
                linkHandlers.onCreateNewPostHandler();
            }}>Add post</a>
        </StyledHeader>
       
    );
};

export default Header;