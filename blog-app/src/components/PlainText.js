import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 12px;
    color: #fff;
`;

const PlainText = ({children}) => (
    <StyledP>{children}</StyledP>
);

export default PlainText;