import React from "react";
import ReactDOM from "react-dom/client";

// const firstEle = <h1>Hello World!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const myList = ["Array", "Apple", "Pineapple"];
const lastEle = myList.map((item) => <p>{item}</p>)

// root.render(firstEle, lastEle);
root.render(lastEle);