/* global history */
/* eslint no-restricted-globals: ["off", "history"]*/

import React, { Component } from 'react';
import ReactDOM from "react-dom"
import "./App.css";
import Header from   './components/Header';
import Footer from   './components/Footer';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Modal from './components/Modal';
import uuid from 'uuid/v4';
import CommentList from './components/CommentList';

export default class App extends React.Component {
  state ={

  }
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
    e.preventDefault();
    var comments = this.store.getState().comments;
    console.log("ALL COMMENTS: ", comments);
    var postComments = comments.filter((comment) => {
      return comment.postId == postId;
    })

    console.log("POST COMMENTS: ", postComments);
    this.setState({
      postComments: postComments
    });

    this.navigate(`/comments/${postId}`);
  }

  onShowPosts = () => {
    this.setState({
      postComments:null
    }, function () {
      this.navigate("/");
    });
  }

  navigate = (url) => {
    var stateData = {
      location: url 
    };
    this.addToHistory(stateData,url);
  }

  addToHistory = (stateData, url) => {
    history.pushState(stateData, null, url);
  }

  popFromHistory = (url) => {
    if (url.trim() == "/") {
      this.onShowPosts();
    }
  }

  constructor(props) {
    super(props);
    this.store = props.store;
  }

  log = []

  componentDidMount() {
    window.addEventListener('popstate',this.popstate);
  }

  popstate = (e) => {
    console.log("popstate: ", e, location.pathname);
    this.popFromHistory(location.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.popstate);
  }

  render() {
      let state = this.store.getState();
      console.log("State from redux: ", state);
      
      var view = this.state.postComments ?
            <CommentList data={this.state.postComments}
              onShowPosts={this.onShowPosts}/>
          :
          <PostList
            onUpVote={this.onUpVote}
            onDownVote={this.onDownVote}
            comments={state.comments}
            onShowComments={this.onShowComments}
            posts = {state.posts} />
      
      return (
        <div className="app">
            <Header onTogglePostForm={this.togglePostForm} />
             {view}
            <Footer />
            <Modal show={state.showPostForm} onClose={this.onClose}>
                <PostForm onPostSubmit={this.onPostSubmit} />
            </Modal>
        </div>
      );
  }
}

