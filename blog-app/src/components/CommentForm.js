import React, { useState } from 'react';
import styled from 'styled-components';

import InputField from './InputField';
import TextAreaField from './TextAreaField';
import MainButton from './MainButton';

const StyledDiv = styled.div``;

const CommentForm = ({onAddCommentHandler, parentId}) => {

    const [UserName, setUserName] = useState('');
    const [CommentText, setCommentText] = useState('');

    const nameInputHandler = name => {
        setUserName(name);
    };
    const commentInputHandler = com => {
        setCommentText(com);
    };

    return (
        <StyledDiv>
            <InputField inputValue={UserName} handleChange={nameInputHandler} type='Username' />
            <TextAreaField textareaValue={CommentText} handleChange={commentInputHandler} />
            <MainButton onButtonClick={onAddCommentHandler.bind(this, parentId, UserName, CommentText)}>Add Comment</MainButton>
        </StyledDiv>
    );
};

export default CommentForm;