import React from "react";
import Counter from "./counter";

function Counters(props) {
  const { counters, setCounters, onDelete, onDecrement, onIncrement, onReset } =
    props;
  
  const addBtn = () => {
    if (counters.length === 0) {
      return (
        <button
          onClick={() =>
            setCounters((_counters) => [{ id: 1, value: 0 }])
          }
          className="btn btn-info ml-2"
        >
          Add
        </button>
      );
    } else {
      return (
        <button
          onClick={() =>
            setCounters((counters) => [
              ...counters,
              { id: counters[counters.length - 1].id + 1, value: 0 },
            ])
          }
          className="btn btn-info ml-2"
        >
          Add
        </button>
      );
    }
  };

  return (
    <>
      <div className="m-2">
        <button
          onClick={() => setCounters(() => [])}
          className="btn btn-warning ml-2"
        >
          Clear
        </button>
        <button onClick={() => onReset()} className="btn btn-danger ml-2">
          Reset
        </button>
        {addBtn()}
      </div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          counter={counter}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
      ))}
    </>
  );
}

export default Counters;
