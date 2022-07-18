import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
const cssstyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssstyle.color = "green";
} else if (curDate >= 12 && curDate < 15) {
  greeting = "Good AfterNoon";
  cssstyle.color = "yellow";
} else if (curDate >= 15 && curDate < 19) {
  greeting = "Good Evening";
  cssstyle.color = "blue";
} else {
  greeting = "Good Night";
  cssstyle.color = "pink";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Greeting yuvi <span style={cssstyle}> {greeting} </span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
