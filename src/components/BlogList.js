import React, { Component } from 'react';
import Blog from './Blog';
import Api from '../utils/Api';

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogList: []
    };
  }

  async getData() {
    this.setState({
      blogList: await Api('http://localhost:3000/blog/get')
    })
  }

  async componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {this.state.blogList.map((blogItem) => (
          <Blog blog={blogItem} key={blogItem.id} />
        ))}
      </div>
    );
  }
}

export default BlogList;
