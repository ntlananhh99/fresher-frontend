import React, { Component } from 'react';
import Comment from './Comment';
import _ from 'lodash';

class Comments extends Component {
  render() {
    return (
      <div>
        {!_.isEmpty(this.props.data) && this.props.data.map((todoItem) => (
          <Comment todo={todoItem} key={todoItem.id} />
        ))}
      </div>
    );
  }
}

export default Comments;
