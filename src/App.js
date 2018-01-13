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
      {id: uuid(), title: "My first post", author:"rajesh", url:"http://google.com", createdOn: new Date()},
      {id: uuid(), title: "My second post", author:"smeeta", url:"http://google.com", createdOn: new Date()},
      {id: uuid(), title: "My third post", author:"rajesh", url:"http://google.com", createdOn: new Date()},
      {id: uuid(), title: "My fourth post", author:"urvashi", url:"http://google.com", createdOn: new Date()},
      {id: uuid(), title: "My fifth post", author:"jai", url:"http://google.com", createdOn: new Date()}
    ],

    showPostForm: false
  }

  onPostSubmit = (e, post) => {
    e.preventDefault();
    post.id = uuid();
    post.createdOn = new Date();
    this.setState({
      posts: [post, ...this.state.posts]
    })
  }

  togglePostForm = () => {
    this.setState({
      showPostForm: !this.state.showPostForm
    })
  }

  onClose = () => {
    this.togglePostForm();
  }

  constructor() {
    super();
  }
  render() {
      return (
        <div className="app">
            <Header onTogglePostForm={this.togglePostForm} />
            <PostList posts = {this.state.posts} />
            <Footer />
            <Modal show={this.state.showPostForm} onClose={this.onClose}>
                <PostForm onPostSubmit={this.onPostSubmit} />
            </Modal>
        </div>
      );
  }
}

