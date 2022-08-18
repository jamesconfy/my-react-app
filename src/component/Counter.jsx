import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h4>{count}</h4>
      <button>Increment</button>
    </>
  );
}

export default Counter;
