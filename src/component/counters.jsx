import React, { useState } from "react";
import Counter from "./counter";
// import { useState } from "react";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 7 },
    { id: 2, value: 19 },
    { id: 3, value: 200 },
    { id: 4, value: 17 },
  ]);

  const onDelete = (counterId) => {
    const counter = counters.filter((c) => c.id !== counterId);
    setCounters(counter);
  };

  const onDecrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value--;
    setCounters(newCounters);
  };

  const onIncrement = (counter) => {
    const newCounters = [...counters];
    const index = counters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const Reset = () => {
    const counter = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(counter);
  };

  const addBtn = () => {
    if (counters.length === 0) {
      return (
        <button
          onClick={() =>
            setCounters((counters) => [...counters, { id: 1, value: 0 }])
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
        <button onClick={() => Reset()} className="btn btn-danger ml-2">
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
