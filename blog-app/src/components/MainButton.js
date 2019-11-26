import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 15px;
    border: none;
    background-color: #fff;
    color: #000;
`;

const MainButton = ({children, onButtonClick}) => (
    <StyledButton onClick={onButtonClick}>{children}</StyledButton>
);

export default MainButton;