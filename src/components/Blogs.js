import React, { Component } from 'react';
import Blog from './Blog';

class Blogs extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((blogItem) => (
          <Blog blog={blogItem} key={blogItem.id} />
        ))}
      </div>
    );
  }
}

export default Blogs;
