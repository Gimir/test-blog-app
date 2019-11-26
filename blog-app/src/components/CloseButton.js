import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    width: 2px;
    height: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -1px;
    transform: rotate(45deg);

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(90deg);
    }
`;
const StyledDiv = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 222;
    transition: 0.2s;
    border-radius: 20px;

    &:hover {
        background-color: grey;
    }
`;

const CloseButton = ({onCloseHandler}) => {
    return (
        <StyledDiv onClick={onCloseHandler}>
            <StyledSpan></StyledSpan>
        </StyledDiv>
    );
};

export default CloseButton;