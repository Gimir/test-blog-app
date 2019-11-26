import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Subtitle from './Subtitle';

const StyledDiv = styled.div`
    width: 50%;
    height: 150px;
    margin: 30px 0;
    background-color: #000;
    border: 1px solid grey;
    border-radius: 5px;

`;

const Post = props => (
    <StyledDiv>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
    </StyledDiv>
);

export default Post;