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
  
  onPostSubmit = (e, post) => {
    e.preventDefault();
    post.id = uuid();
    post.createdOn = new Date();
    post.upvote=0;
    post.downvote=0;
    post.votes = 0;

    this.store.dispatch({
      type: "ADD_POST",
      payload: {
          post
      }
    });
  }

  onUpVote = (postId) => {
    this.store.dispatch({
      type: "UP_VOTE",
      postId: postId
    });
  }

  onDownVote = (postId) => {
    this.store.dispatch({
      type: "DOWN_VOTE",
      postId: postId
    });
  }

 
  togglePostForm = () => {
    this.store.dispatch({
      type: "SHOW_POST_FORM"
    });
  }

  // Modal close
  onClose = () => {
    this.togglePostForm();
  }

  onShowComments = (e, postId) => {
    alert(postId);
    var comments = this.store.getState().comments;
    console.log("ALL COMMENTS: ", comments);
    var postComments = comments.filter((comment) => {
      return comment.postId == postId;
    })

    console.log("POST COMMENTS: ", postComments);
    this.setState({
      postComments: postComments
    });
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  log = []

  componentDidMount() {
  }

  render() {
      let state = this.store.getState();
      console.log("State from redux: ", state);
      return (
        <div className="app">
            <Header onTogglePostForm={this.togglePostForm} />
            <PostList
               onUpVote={this.onUpVote}
               onDownVote={this.onDownVote}
               comments={state.comments}
               onShowComments={this.onShowComments}
               posts = {state.posts} />
            <Footer />
            <Modal show={state.showPostForm} onClose={this.onClose}>
                <PostForm onPostSubmit={this.onPostSubmit} />
            </Modal>
        </div>
      );
  }
}

