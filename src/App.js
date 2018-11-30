import React, { Component } from "react";

import "./App.css";
import Alphabet from "./components/Alphabet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <svg height="600" width="100%">
          {" "}
          <Alphabet x={32} y={300} />
        </svg>
      </div>
    );
  }
}

export default App;
