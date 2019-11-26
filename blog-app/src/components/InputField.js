import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 50%;
    height: 30px;
    border: 2px solid grey;
    background-color: #fff;
    padding: 0 10px 0 10px;
    margin: 20px 0;
`;

const InputField = ({type, handleChange, inputValue}) => {
    let input;
    return (
        <StyledInput type="text" placeholder={type} onChange={()=> handleChange(input.value)} value={inputValue} ref={ref => input = ref} />
    );
};

export default InputField;