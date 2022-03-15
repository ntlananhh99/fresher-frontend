import React, { Component } from 'react';

const HighOrder = (WrappedComponent, selectData) => {
  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    async getData() {
      this.setState({
        data: await selectData()
      })
      console.log(this.state.data)
    }

    async componentDidMount() {
      this.getData();
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default HighOrder;
