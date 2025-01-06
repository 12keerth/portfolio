import React, { Component } from "react";

class ShowMultipleValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "", // To hold the current input value
      values: [], // To hold the list of entered values
    };
  }

  // Handle changes in the input field
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Add the current input value to the list
  handleAddValue = () => {
    if (this.state.inputValue.trim() !== "") {
      this.setState((prevState) => ({
        values: [...prevState.values, prevState.inputValue], // Add input to the array
        inputValue: "", // Clear the input field
      }));
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Show Multiple Values</h2>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Type something..."
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            marginRight: "10px",
            width: "300px",
          }}
        />
        {/* Add Button */}
        <button
          onClick={this.handleAddValue}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
        {/* Display the values */}
        <div style={{ marginTop: "20px", textAlign: "left", display: "inline-block" }}>
          <h3>Entered Values:</h3>
          <ul>
            {this.state.values.map((value, index) => (
              <li key={index} style={{ fontSize: "18px" }}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShowMultipleValues;


// 1. Controlled Input:
// The value of the input field is set to this.state.inputValue, making it a controlled component.
// This ensures that the input field and the state stay synchronized.

// 2. Event Handling:
// The onChange event is triggered whenever the input changes.
// The handleInputChange method updates this.state.inputValue with the latest value.

// 3. Dynamic Display:
// The updated this.state.inputValue is displayed below the input field in a <h3> element.

// 4. Placeholder for Empty State:
// When this.state.inputValue is empty, a default message ("Start typing to see the value here!") is displayed using the logical OR (||) operator.
