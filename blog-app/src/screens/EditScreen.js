import React, { useState } from 'react';
import styled from 'styled-components';

import InputField from '../components/InputField';
import TextAreaField from '../components/TextAreaField';
import MainButton from '../components/MainButton';

const StyledDiv = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;



const EditScreen = ({onAddPostClick, onSavePostClick, onPostChange}) => {

    const [Title, setTitle] = useState(onPostChange ? onPostChange.title : '');
    const [Subtitle, setSubtitle] = useState(onPostChange ? onPostChange.subtitle : '');
    const [Body, setBody] = useState(onPostChange ? onPostChange.body : '');
    
    const onTitleChange = title => {
        setTitle(title);
    };
    const onSubtitleChange = subtitle => {
        setSubtitle(subtitle);
    };
    const onBodyChange = text => {
        setBody(text);
    }
    

    return (
        <StyledDiv>
            <InputField type="Title" handleChange={onTitleChange} inputValue={Title} />
            <InputField type="Subtitle" handleChange={onSubtitleChange} inputValue={Subtitle} />
            <TextAreaField handleChange={onBodyChange} textareaValue={Body} />
            <MainButton onButtonClick={
                onPostChange ?
                    onSavePostClick.bind(this, {
                        id: onPostChange.id,
                        title: Title,
                        subtitle: Subtitle,
                        body: Body
                    })
                :
                    onAddPostClick.bind(this, {
                        title: Title,
                        subtitle: Subtitle,
                        body: Body
                    })
            }
            >
            {onPostChange ? 'Save' : 'Add Post'}
            </MainButton>
        </StyledDiv>
    );
};

export default EditScreen;