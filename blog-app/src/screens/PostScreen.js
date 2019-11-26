import React from 'react';
import styled from 'styled-components';

import Date from '../components/Date';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import PlainText from '../components/PlainText';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const StyledDiv = styled.div`
    width: 100%;
    padding: 50px;
`;

const fontColor = {
    color: '#000'
}

const PostScreen = ({post, comments, onAddCommentHandler, onDeleteComment}) => {

    return (
        <StyledDiv>
            <Date>{post[0].date}</Date>
            <Title style={fontColor}>{post[0].title}</Title>
            <Subtitle style={fontColor}>{post[0].subtitle}</Subtitle>
            <PlainText style={fontColor}>{post[0].body}</PlainText>
            <CommentList comments={comments} onDeleteComment={onDeleteComment} />
            <CommentForm onAddCommentHandler={onAddCommentHandler} parentId={post[0].id} />
        </StyledDiv>
    );
};

export default PostScreen;