import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Subtitle from './Subtitle';
import CloseButton from './CloseButton';

const StyledDiv = styled.div`
    width: 50%;
    height: 150px;
    position: relative;
    margin: 30px 0;
    background-color: #000;
    border: 1px solid grey;
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;
const TouchableDiv = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    lef: 0;
`;
const EditBtn = styled.button`
    border: none;
    font-size: 20px;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #000;
    position: absolute;
    right: 10px;
    bottom: 10px;
    trasition: 0.2s;
    z-index: 222;

    &:hover {
        background-color: grey;
        cursor: pointer;
    }

`;

const Post = props => (
    <StyledDiv>
        <CloseButton onCloseHandler={props.deletePostHandler} />
        <TouchableDiv onClick={props.openPostHandler}></TouchableDiv>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <EditBtn onClick={props.onPostClick}>Edit</EditBtn>
    </StyledDiv>
);

export default Post;