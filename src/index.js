import React from "react";
import ReactDOM from "react-dom/client";
import Garage from "./pages/Garage";
import Goal from "./pages/Goal";
import MyForm from "./pages/Form";
import Timer from "./pages/Timer";

// const firstEle = <h1>Hello World!</h1>;
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// const root3 = ReactDOM.createRoot(document.getElementById('root3'));
// const root4 = ReactDOM.createRoot(document.getElementById('root4'));
// const myList = ["Array", "Apple", "Pineapple"];
// const lastEle = myList.map((item) => <li>{item}</li>);

const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  const cars = ["Ford", "BMW", "Toyota", "Honda"]
  return (
    <>
      <Goal isGoal={true} />
      <Garage cars={cars} />
      <MyForm />
      <Timer />
    </>
  );
}


/* const para = (
  <table>
    <thead>
      <tr>
        <th>My Table</th>
        <th>My Table1</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Hello1</td>
        <td>Hello2</td>

      </tr>

      <tr>
        <td>Hello4</td>
        <td>Hello5</td>
      </tr>

      <tr>
        <td>Hello3</td>
        <td>Hello6</td>
      </tr>
    </tbody>
  </table>
);

*/
// root.render(firstEle, lastEle);
// const sandy2 = <p>Hello</p>;
// const fandy2 = (<option>Wah!</option>)
// root.render(para);
// root1.render(<Goal isGoal={true} />)
// root2.render(<Garage cars={cars} />);
// root3.render(<MyForm />)
// root4.render(<Timer />)
// fandy.render(text);
root.render(App)