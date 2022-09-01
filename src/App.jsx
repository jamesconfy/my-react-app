import Counters from "./component/counters";
import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/navbar";

function App() {
  const [counters, setCounters] = useState([]);

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

  return (
    <>
      <NavBar totalCount={counters.filter((c) => c.value > 0).length} />
      <div className="container-fluid" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
            <h2>Starting Again, Yea!</h2>
            <Counters
              counters={counters}
              setCounters={setCounters}
              onDelete={onDelete}
              onDecrement={onDecrement}
              onIncrement={onIncrement}
              onReset={Reset}
            />
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
      </div>
    </>
  );
}

export default App;
