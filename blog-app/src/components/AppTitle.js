import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-size: 35px;
    color: #fff;
    text-align: center;
    text-transform: capitalize;
`;

const AppTitle = ({children}) => (
    <StyledH1>{children}</StyledH1>
);

export default AppTitle;