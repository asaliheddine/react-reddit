import React, { Component } from 'react';
import ReactDOM from "react-dom"
import "./App.css";
import Header from   './components/Header';
import Footer from   './components/Footer';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Modal from './components/Modal';
import uuid from 'uuid/v4';

export default class App extends React.Component {

  // state = {
  //   posts:[
  //     {id: uuid(), title: "My first post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
  //     {id: uuid(), title: "My second post", author:"smeeta", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
  //     {id: uuid(), title: "My third post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
  //     {id: uuid(), title: "My fourth post", author:"urvashi", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
  //     {id: uuid(), title: "My fifth post", author:"jai", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
  //   ],

  //   showPostForm: false
  // }

  onPostSubmit = (e, post) => {
    e.preventDefault();
    post.id = uuid();
    post.createdOn = new Date();
    post.upvote=0;
    post.downvote=0;
    
    // this.updateState({
    //   posts: [post, ...this.state.posts]
    // })
    
    this.store.dispatch({
      type: "ADD_POST",
      payload: {
          post
      }
    });
  }

  onUpVote = (postId) => {
    // var posts = Object.assign([], this.state.posts);
    // console.log(posts);
    // var post = posts.find((post) => {
    //   return post.id == postId;
    // });
    // post.votes++;
    this.store.dispatch({
      type: "UP_VOTE",
      postId: postId
    });
    //this.onVoteChanged(posts);
  }

  onDownVote = (postId) => {
    // var posts = Object.assign([], this.state.posts);
    // console.log(posts);
    // var post = posts.find((post) => {
    //   return post.id == postId;
    // });
    // post.votes--;
    this.store.dispatch({
      type: "DOWN_VOTE",
      postId: postId
    });
  }

 
  togglePostForm = () => {
    var store = this.props.store;
    store.dispatch({
      type: "SHOW_POST_FORM"
    });
  }

  onClose = () => {
    this.togglePostForm();
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  log = []

  componentDidMount() {
  }

  render() {
      let state = this.props.store.getState();
      console.log("State from redux: ", this.props.state);
      return (
        <div className="app">
            <Header onTogglePostForm={this.togglePostForm} />
            <PostList
               onUpVote={this.onUpVote}
               onDownVote={this.onDownVote}
               posts = {state.posts} />
            <Footer />
            <Modal show={state.showPostForm} onClose={this.onClose}>
                <PostForm onPostSubmit={this.onPostSubmit} />
            </Modal>
        </div>
      );
  }
}

