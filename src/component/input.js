import React from "react";

const FruitList = () => {
  // Static list of fruits
  const fruits = [
    { id: 101, name: "Apple" },
    { id: 102, name: "Banana" },
    { id: 103, name: "Cherry" },
    { id: 104, name: "Date" },
    { id: 105, name: "Elderberry" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Fruits List</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {fruits.map((fruit) => (
          // Use unique 'id' from the object as the key
          <li
            key={fruit.id}
            style={{
              fontSize: "18px",
              margin: "10px 0",
              color: "green",
            }}
          >
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;


// 1. Static Data Source:
// The fruits array is predefined and contains objects with id and name properties.

// 2. Unique Keys:
// The id property from each fruit object is used as the unique key (key={fruit.id}).

// 3. Why Not Use index?
// Using the index of the array as a key is generally not recommended unless the list is static and won’t change (e.g., sorted, filtered, added to, or removed from).

// 4. Inline Styling for Customization:
// Each <li> element is styled to make the list visually appealing.
