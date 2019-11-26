import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    font-size: 12px;
    color: #fff;
`;

const PlainText = ({children, style}) => (
    <StyledP style={style}>{children}</StyledP>
);

export default PlainText;