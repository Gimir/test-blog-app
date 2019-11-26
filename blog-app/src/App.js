import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import BlogScreen from './screens/BlogScreen';
import EditScreen from './screens/EditScreen';
import PostScreen from './screens/PostScreen';

function App() {

  const [Posts, setPosts] = useState(
    JSON.parse(localStorage.getItem('posts')) || []
  );
  const [Comments, setComments] = useState(
    JSON.parse(localStorage.getItem('comments')) || []
  );
  const [CurrentPost, setCurrentPost] = useState(undefined);
  const [CurrentScreen, setCurrentScreen] = useState('/');
  const [PostOnChange, setPostOnChange] = useState(undefined);

  useEffect(()=> {
    localStorage.setItem('posts', JSON.stringify(Posts));
    localStorage.setItem('comments', JSON.stringify(Comments));
  }, [Posts, Comments]);

  const switchToScreen = url => {
    switch (url) {
      case '/':
        return <BlogScreen posts={Posts} 
                  onPostClick={onChangePostHandler} 
                  deletePostHandler={onDeletePostHandler}
                  openPostHandler={onOpenPostHandler} />
      case '/edit':
        return <EditScreen 
                  onAddPostClick={createNewPost}
                  onSavePostClick={changePost}
                  onPostChange={PostOnChange ? Posts.filter(post => post.id === PostOnChange) :
                                undefined}
                />
      case '/post':
        return <PostScreen post={Posts.filter(post=> post.id === CurrentPost)}
                  comments={Comments.filter(com=> com.parentId === CurrentPost)}
                  onAddCommentHandler={onAddCommentHandler}
                  onDeleteComment={onDeleteCommentHandler}
                />
      default:
        return <BlogScreen posts={Posts} 
                  onPostClick={onChangePostHandler} 
                  deletePostHandler={onDeletePostHandler}
                  openPostHandler={onOpenPostHandler} />
    };
  };

  const onCreateNewPostHandler = () => {
    setCurrentScreen('/edit');
    setPostOnChange(undefined);
    setCurrentPost(undefined);
  };
  const onGoHomeHandler = () => {
    setCurrentScreen('/');
    setPostOnChange(undefined);
    setCurrentPost(undefined);
  };
  const onChangePostHandler = id => {
    setPostOnChange(id);
    setCurrentScreen('/edit');
  };
  const onOpenPostHandler = id => {
    setCurrentPost(id);
    setCurrentScreen('/post');

  }
  const onDeletePostHandler = id => {
    setPosts(currentPosts => {
      return currentPosts.filter(post => post.id !== id);
    });
    setComments(currentComments => {
      return currentComments.filter(com => com.parentId !== id);
    });
  };

  const createNewPost = post => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() +1).padStart(2, '0');
    let yyyy = today.getFullYear();
  
    setPosts(currentPosts => [
      {
        id: today.getTime(),
        date: mm+'/'+dd+'/'+yyyy,
        title: post.title,
        subtitle: post.subtitle,
        body: post.body
      },
      ...currentPosts
    ]);
    setCurrentScreen('/');
  };

  const changePost = newPost => {
    setPosts(currentPosts => {
      return currentPosts.map(post => {
        if (post.id === newPost.id) {
          return {
            id: post.id,
            date: post.date,
            title: newPost.title ? newPost.title : post.title,
            subtitle: newPost.subtitle ? newPost.subtitle : post.subtitle,
            body: newPost.body ? newPost.body : post.body
          }
        }
        else return post;
      })
    });
    setCurrentScreen('/');
    setPostOnChange(undefined);
  };

  const onAddCommentHandler = (parentId, username, text) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() +1).padStart(2, '0');
    let yyyy = today.getFullYear();
    setComments(currentComments => [
      ...currentComments,
      {
        id: today.getTime(),
        parentId: parentId,
        date: mm+'/'+dd+'/'+yyyy,
        username: username,
        text: text
      }
    ]);
  };

  const onDeleteCommentHandler = id => {
    setComments(currentComments => {
      return currentComments.filter(com => com.id !== id);
    });
  };

  let renderedScreen = switchToScreen(CurrentScreen);

  useEffect(()=> {
    renderedScreen = switchToScreen(CurrentScreen);
  }, [CurrentScreen]);

  return (
    <main>
      <Header linkHandlers={{onCreateNewPostHandler, onGoHomeHandler}} />
      {renderedScreen}
    </main>
  );
}

export default App;
