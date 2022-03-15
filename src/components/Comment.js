import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.todo
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.comment.firstName} {this.state.comment.lastName}</p>
      </div>
    );
  }
}

export default Comment;
