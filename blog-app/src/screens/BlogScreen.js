import React from 'react';
import styled from 'styled-components';

import PostList from '../components/PostList';

const BlogScreen = ({posts}) => {
    return (
        <div>
            <PostList posts={posts} />
        </div>
    )
    
};

export default BlogScreen;