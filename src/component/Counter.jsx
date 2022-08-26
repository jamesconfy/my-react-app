import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <span className={getBadgeClass()}>{count}</span>
      {renderButton(count)}
      <button
        className="btn btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
    </>
  );

  function getBadgeClass() {
    let classes = "badge text-light m-2 p-2 bg-";
    classes += count <= 0 ? "warning" : "success";
    return classes;
  }

  function renderButton(count) {
    if (count === 0) {
      return (
        <button
          className="btn btn-danger"
          onClick={() => setCount((count) => count - 1)}
          disabled
        >
          Decrement
        </button>
      );
    }

    return (
      <button
        className="btn btn-danger"
        onClick={() => setCount((count) => count - 1)}
      >
        Decrement
      </button>
    );
  }
}

export default Counter;
