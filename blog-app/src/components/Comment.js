import React from 'react';
import styled from 'styled-components';

import Date from './Date';
import Subtitle from './Subtitle';
import PlainText from './PlainText';

import CloseButton from './CloseButton';

const StyledDiv = styled.div`
    width: 50%;
    min-width: 300px;
    padding: 20px;
    position: relative;
    z-index: 1;
`;

const fontColor = {
    color: '#000'
}

const Comment = ({date, username, text, onDeleteComment}) => {
    return (
        <StyledDiv>
            <CloseButton onCloseHandler={onDeleteComment} />
            <Date>{date}</Date>
            <Subtitle style={fontColor}>{username}</Subtitle>
            <PlainText style={fontColor}>{text}</PlainText>
        </StyledDiv>
    );
};

export default Comment;