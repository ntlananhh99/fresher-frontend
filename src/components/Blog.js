import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: this.props.blog
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.blog.title} {this.state.blog.small_description}</p>
      </div>
    );
  }
}

export default Blog;
