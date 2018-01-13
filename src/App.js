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

  state = {
    posts:[
      {id: uuid(), title: "My first post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My second post", author:"smeeta", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My third post", author:"rajesh", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My fourth post", author:"urvashi", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
      {id: uuid(), title: "My fifth post", author:"jai", url:"http://google.com", createdOn: new Date(),votes:0,upvote:0,downvote:0},
    ],

    showPostForm: false
  }

  onPostSubmit = (e, post) => {
    e.preventDefault();
    post.id = uuid();
    post.createdOn = new Date();
    post.upvote=0;
    post.downvote=0;
    this.updateState({
      posts: [post, ...this.state.posts]
    })
  }

  onUpVote = (postId) => {
    var posts = Object.assign([], this.state.posts);
    console.log(posts);
    var post = posts.find((post) => {
      return post.id == postId;
    });

    post.votes++;
    this.onVoteChanged(posts);
  }

  onDownVote = (postId) => {
    var posts = Object.assign([], this.state.posts);
    console.log(posts);
    var post = posts.find((post) => {
      return post.id == postId;
    });

    post.votes--;

    this.onVoteChanged(posts);
    
  }

  onVoteChanged = (posts) =>{
    posts.sort((a, b) => {
      if (a.votes > b.votes) return -1;
      return 1;
    })
    
    this.updateState({
      posts
    });
  }
  
  togglePostForm = () => {
    this.updateState({
      showPostForm: !this.state.showPostForm
    })
  }

  onClose = () => {
    this.togglePostForm();
  }

  constructor() {
    super();
  }

  updateState = (newState) => {
   
    this.setState(newState);
  }

  render() {
      return (
        <div className="app">
            <Header onTogglePostForm={this.togglePostForm} />
            <PostList
               onUpVote={this.onUpVote}
               onDownVote={this.onDownVote}
               posts = {this.state.posts} />
            <Footer />
            <Modal show={this.state.showPostForm} onClose={this.onClose}>
                <PostForm onPostSubmit={this.onPostSubmit} />
            </Modal>
        </div>
      );
  }
}

