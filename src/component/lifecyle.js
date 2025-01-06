import React, { Component } from 'react';

class LifecycleDemo extends Component {
  // 1. Mounting Phase
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being created');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state with props if needed');
    return null; // Return new state if required, or null to make no changes
  }

  componentDidMount() {
    console.log('componentDidMount: Component is now in the DOM');
  }

  // 2. Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Decide if re-render is needed');
    return true; // Returning false skips rendering
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture DOM info before update');
    return null; // Return a value to pass to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component was re-rendered');
  }

  // Method to update state and trigger re-render
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 3. Unmounting Phase
  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before component is removed');
  }

  render() {
    console.log('Render: Component is rendering/re-rendering');
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
