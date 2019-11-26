import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    width: 50%;
    min-width: 300px;
    height: 200px;
    border: 2px solid grey;
    background-color: #fff;
    padding: 10px 20px;
    margin: 20px 0;
`;

const TextAreaField = ({handleChange, textareaValue}) => {
    let textarea = '';
    return (
        <StyledTextArea onChange={()=> handleChange(textarea.value)} value={textareaValue} ref={ref=> textarea=ref} />
    );
};

export default TextAreaField;