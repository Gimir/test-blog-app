import React from 'react';
import styled from 'styled-components';

import Post from './Post';

const StyledDiv = styled.div`
    width: 100%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PostList = ({posts, onPostClick, deletePostHandler, openPostHandler}) => {
    return (
        <StyledDiv>
            {
                posts.map(post => (
                    <Post key={post.id} 
                        title={post.title} 
                        subtitle={post.subtitle} 
                        onPostClick={onPostClick.bind(this, post.id)} 
                        deletePostHandler={deletePostHandler.bind(this, post.id)}
                        openPostHandler={openPostHandler.bind(this, post.id)} />
                ))
            }
        </StyledDiv>
    );
};

export default PostList;