import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.counter.value);

  const renderButton = () => {
    if (count === 0) {
      return (
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => setCount((count) => count - 1)}
          disabled
        >
          Decrement
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => setCount((count) => count - 1)}
        >
          Decrement
        </button>
      );
    }
  };

  const getBadgeClass = () => {
    let classes = "badge badge-sm text-light m-2 p-2 bg-";
    classes += count <= 0 ? "warning" : "success";
    return classes;
  };

  return (
    <div>
      <span className={getBadgeClass()}>{count}</span>
      {renderButton()}
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => setCount((count) => count + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.counter.id)}
      >
        Delete
      </button>
    </div>
  );

  // function getBadgeClass() {
  //   let classes = "badge text-light m-2 p-2 bg-";
  //   classes += count <= 0 ? "warning" : "success";
  //   return classes;
  // }

  // function renderButton(count) {
  //   if (count === 0) {
  //     return (
  //       <button
  //         className="btn btn-danger"
  //         onClick={() => setCount((count) => count - 1)}
  //         disabled
  //       >
  //         Decrement
  //       </button>
  //     );
  //   } else {
  //     return (
  //       <button
  //         className="btn btn-danger"
  //         onClick={() => setCount((count) => count - 1)}
  //       >
  //         Decrement
  //       </button>
  //     );
  //   }
  // }
}

export default Counter;
