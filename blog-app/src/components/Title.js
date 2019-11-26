import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
`;

const Title = ({children, style}) => (
    <StyledH2 style={style}>{children}</StyledH2>
);

export default Title;