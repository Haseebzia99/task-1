import React from "react";
import ReactDOM from "react-dom";

const Welcome = React.createElement(
  "h1",
  { className: "welcome" },
  "Welcome"
);

const rootElement = document.getElementById("root");

ReactDOM.render(Welcome, rootElement);

export default Welcome;
