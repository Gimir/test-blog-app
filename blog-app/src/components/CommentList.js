import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';

const StyledDiv = styled.div`
    width: 100%;
    padding: 50px 0;
    border-top: 2px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const CommentList = ({comments, onDeleteComment}) => {
    return (
        <StyledDiv>
            {
                comments.map((comment, index) => (
                    <Comment date={comment.date} 
                        username={comment.username} 
                        text={comment.text} key={index} 
                        onDeleteComment={onDeleteComment.bind(this, comment.id)} />
                ))
            }
        </StyledDiv>
    );
}

export default CommentList;