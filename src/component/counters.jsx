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

  return (
    <>
      <div className="m-2">
        <button
          onClick={() => setCounters(() => [])}
          className="btn btn-warning ml-2"
        >
          Clear
        </button>
        <button
          onClick={() =>
            setCounters((counters) => [
              ...counters,
              { id: counters.length + 1, value: 12 },
            ])
          }
          className="btn btn-info ml-2"
        >
          Add
        </button>
      </div>
      {counters.map((counter) => (
        <Counter key={counter.id} onDelete={onDelete} counter={counter} />
      ))}
    </>
  );
}

export default Counters;
