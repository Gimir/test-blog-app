import React from 'react';
import styled from 'styled-components';

import PostList from '../components/PostList';

const BlogScreen = ({posts, onPostClick, deletePostHandler, openPostHandler}) => {
    return (
        <div>
            <PostList posts={posts} 
                onPostClick={onPostClick} 
                deletePostHandler={deletePostHandler}
                openPostHandler={openPostHandler} />
        </div>
    )
    
};

export default BlogScreen;