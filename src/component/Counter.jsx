import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>{count}</h4>
      <button onClick={(count) => setCount(count) + 1}>Increment</button>
    </>
  );
}

export default Counter;
