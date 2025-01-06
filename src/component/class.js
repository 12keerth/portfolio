import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            heading:props.data,
            name:props.name
        }
    }
    change=()=>{
        this.setState({
            heading:"new heading",
            name:'nithiya' 
        })
    }
  render() {
    return (
        <>
      <h1>{this.props.data}</h1>
      <p>{this.state.name}</p>
      <button onClick={this.change}>change</button>
      </>
    );
  }
}


export default MyComponent;
