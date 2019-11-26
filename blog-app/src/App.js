import React, { useState, useEffect } from 'react';
import { useHistory, BrowserRouter as Router,
        Switch,
        Route,
        Link
} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import BlogScreen from './screens/BlogScreen';
import EditScreen from './screens/EditScreen';
import PostScreen from './screens/PostScreen';

function App() {

  const [Posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [CurrentPost, setCurrentPost] = useState(undefined);

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
    })
  }


  return (
    <Router>
      <main>
        <Header />

        <Switch>
          <Route exact path='/'>
            <BlogScreen posts={Posts} />
          </Route>
          <Route path='/post'>
            <PostScreen />
          </Route>
          <Route path='/edit'>
            <EditScreen onAddPostClick={createNewPost} onSavePostClick={changePost} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
