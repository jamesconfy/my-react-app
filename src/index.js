import React from "react";
import ReactDOM from "react-dom/client";
import Garage from "./pages/Garage";
import Goal from "./pages/Goal";
import MyForm from "./pages/Form";
import Timer from "./pages/Timer";
import Calculation from "./pages/Calculation";
import Ref from "./pages/Ref";
import Fetch from "./pages/Fetch";
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  const cars = ["Ford", "BMW", "Toyota", "Honda"]
  return (
    <>
      <Garage cars={cars} />
      <MyForm />
      <Goal isGoal={true} />
      <Timer />
      <Calculation />
      <Ref />
      <Fetch />
    </>
  );
}

root.render(<App />)