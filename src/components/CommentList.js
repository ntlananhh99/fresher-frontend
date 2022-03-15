import React, { Component } from 'react';
import Comment from './Comment';
import Api from '../utils/Api';
import _ from 'lodash';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }

  async getData() {
    this.setState({
      todoList: await Api('http://localhost:3000/todo/get')
    })
  }

  async componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        {!_.isEmpty(this.state.todoList) && this.state.todoList.map((todoItem) => (
          <Comment todo={todoItem} key={todoItem.id} />
        ))}
      </div>
    );
  }
}

export default CommentList;
