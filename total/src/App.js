import React from "react";

function App(props) {
  console.log('total props ', props)
  return (
    <div className="App">
      <h1>Total {props.total}</h1>
    </div>
  );
}

export default App;
