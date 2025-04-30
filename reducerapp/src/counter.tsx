import { useState } from "react";

function Counter() {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
          setCounter((c) => c - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
