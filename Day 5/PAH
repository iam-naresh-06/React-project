import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'IamNEO'
    };
    console.log('Constructor: Component is being constructed!');
  }

  componentWillMount() {
    console.log('componentWillMount: Component Will MOUNT!');
  }

  componentDidMount() {
    console.log('componentDidMount: Component Did MOUNT!');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: Component Will Receive Props!');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate: Component Will UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component Did UPDATE!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component Will UNMOUNT!');
  }

  handleChangeMessage = () => {
    this.setState({ msg: 'Welcome to React' });
  };

  render() {
    console.log('Render: Component is rendering...');
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.handleChangeMessage}>Change Message</button>
      </div>
    );
  }
}

export default App;
