import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import registerServiceWorker from "./registerServiceWorker";

import "sanitize.css";
import "./styles/index.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
