import Counters from "./component/counters";
import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <div className="container-fluid" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col-md-4 col-sm-12"></div>
          <div className="col-md-4 col-sm-12">
            <h2>Starting Again, Yea!</h2>
            <Counters />
          </div>
          <div className="col-md-4 col-sm-12"></div>
        </div>
      </div>
    </>
  );
}

export default App;
