import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));
const TotalApp = React.lazy(() => import("Total/App"))

import regions from './data/regions.json';

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => {
  const [total, setTotal] = useState(0);

  const getTotal = (passedTotal) => {
    setTotal(passedTotal);
  }

  console.log('regions ', regions)
  return (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp moduleName="Virtual Machines" getTotal={getTotal} />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>
    <RemoteWrapper>
      <TotalApp total={total}/>
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
  )
  
  };
export default App;
