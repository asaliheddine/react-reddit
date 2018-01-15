import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import uuid from 'uuid/v4';
import App from './App';
import posts from './reducers/posts'; 

registerServiceWorker();


let defaultState = {
    posts:[
      {id: uuid(), title: "My first post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My second post", author:"smeeta", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My third post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My fourth post", author:"urvashi", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My fifth post", author:"jai", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
    ],
    showPostForm: false,
    comments:[]
  }

// Lets create some dummy comments
defaultState.posts.forEach((post, index) => {
    for(let i = 0; i < 5; i++) {
        let comment = {};
        comment.id = uuid();
        comment.title = `Comment ${index} ${i}`;
        comment.body = `Comments details for ${index}`;
        comment.author = "user ${index}";
        comment.postId = post.id;
        defaultState.comments.push(comment);
    }
})

let store = createStore(posts, defaultState);

window.store = store;
console.log("Store: ", store);

function render() {
    console.log("render...");
    ReactDOM.render(<App 
        store={store}
    />, document.getElementById('root'));
}

render();

store.subscribe(render);





