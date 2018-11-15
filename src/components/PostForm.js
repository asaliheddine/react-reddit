import React from 'react';

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        title: "",
        url: "",
        author:""
    }

    handleChange = (e,input) => {
        console.log(e.target, e);

        this.setState({
            [input]: e.target.value
        })
    }

    render() {
        return <div className="post-form">
            <form onSubmit={e => {
                this.props.onPostSubmit(e, this.state);
              }}>
                <h3 className="form-title">Submit a new link</h3>
                <hr className="nt-5 mb-5" />
              <div className="form-group">
                <label htmlFor="title">title</label>
                <input onChange={e => {
                    this.handleChange(e, "title");
                  }} type="text" placeholder="enter title" />
              </div>
              <div className="form-group">
                <label htmlFor="url">url</label>
                <input onChange={e => {
                    this.handleChange(e, "url");
                  }} type="text" placeholder="enter url" />
              </div>
              <div className="form-group">
                <label onChange={e => {
                    this.handleChange(e, "author");
                  }} htmlFor="author">
                  author
                </label>
                <input type="text" placeholder="enter author" />
              </div>
                
                <button className="btn-submit float-right">submit</button>
                <div className="clearfix"></div>
             
            </form>
          </div>;
    }
}