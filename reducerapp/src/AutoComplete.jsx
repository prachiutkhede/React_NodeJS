import React, { useState, useEffect, ChangeEvent } from "react";

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grape",
  "Mango",
  "Orange",
];

export default function AutoComplete() {
  const [input, setInput] = useState("");
  const [filterSuggestion, setFilterSuggestion] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    const filtered = suggestions.filter((item) =>
      item.toLowerCase().startsWith(e.target.value)
    );
    setFilterSuggestion(filtered);
  };

  const handleSuggestionClick = (value) => {
    setInput(value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>

      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "8px",
          border: "1px solid #ccc",
          borderTop: "none",
          maxHeight: "150px",
          overflowY: "auto",
          backgroundColor: "#fff",
          position: "absolute",
          width: "100%",
          zIndex: 1,
        }}
      >
        {filterSuggestion.map((item, idx) => (
          <li
            key={idx}
            onClick={() => handleSuggestionClick(item)}
            style={{ padding: "6px", cursor: "pointer" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
