import React, {Component} from 'react';
import CommentList from './components/CommentList';
import BlogList from './components/BlogList';
import HighOrder from './utils/HighOrder';
import Api from './utils/Api';
import Comments from './components/Comments';
import Blogs from './components/Blogs';

const CommentHOC = HighOrder(Comments, () => {return Api('http://localhost:3000/todo/get')})
const BlogsHOC = HighOrder(Blogs, () => {return Api('http://localhost:3000/blog/get')})

class App extends Component {

  render() {
    return (
      <div className="container mx-auto">
        <p>============================================</p>
        <CommentList />
        <BlogList />
        <p>============================================</p>
        <CommentHOC />
        <BlogsHOC />
        <p>============================================</p>
      </div>
    );  
  }
  
}

export default App;
