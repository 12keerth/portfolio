import React, { useState } from "react";

function Counter() {
  // Define the state
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1); // Update the state
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Button Click Counter</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Counter;