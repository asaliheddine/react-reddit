import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { createStore } from 'redux';
import uuid from 'uuid/v4';

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

    showPostForm: false
  }

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





