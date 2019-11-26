import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
`;

const Subtitle = ({children, style}) => (
    <StyledH3 style={style}>{children}</StyledH3>
);

export default Subtitle;