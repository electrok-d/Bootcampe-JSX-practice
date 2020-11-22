//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Three reasons to complete Bootcamp</h1>

    <ul>
      <li>Make more money</li>
      <li>Exercise the ability to learn something new</li>
      <li>Fulfill the desire for a career change.</li>
    </ul>
  </div>,
  document.getElementById("root")
);
