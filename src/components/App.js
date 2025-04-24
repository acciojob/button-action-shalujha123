import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [state, setState] = useState(false);

  function handleToggle() {
    setState(true);
  }

  return (
    <div className="App" id="main">
      <p id="para" className={state ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
      <button id="click" onClick={handleToggle}>
        Show
      </button>
    </div>
  );
};

export default App;
