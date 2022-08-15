import React from "react";
import ReactDOM from "react-dom/client";
import Garage from "./Garage";
import Goal from "./Goal";
import MyForm from "./Form";

// const firstEle = <h1>Hello World!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const sandy = ReactDOM.createRoot(document.getElementById('sandy'));
const fandy = ReactDOM.createRoot(document.getElementById('fandy'));
// const myList = ["Array", "Apple", "Pineapple"];
// const lastEle = myList.map((item) => <li>{item}</li>);

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

const cars = ["Ford", "BMW", "Toyota", "Honda"]
// root.render(para);
root.render(<Goal isGoal={true} />)
sandy.render(<Garage cars={cars} />);
fandy.render(<MyForm />)
// fandy.render(text);