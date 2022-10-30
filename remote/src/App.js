import React, { useState, useEffect } from "react";
import './Button'
import Button from "./Button";
const hostRegions = React.lazy(() => import("Host/Data"));

export const App = (props) => {
  const [vms, setVms] = useState(0);
  const [hours, setHours] = useState(0)
  const [sum, setSum] = useState(0)
  console.log('remote props ', props.getTotal)
  console.log('remote regions ', hostRegions)

  useEffect(() => {
    props.getTotal(sum)
  }, [sum])

  const calcSum = () => {
    console.log(vms)
    console.log(hours)
    setSum(vms * hours);
  }

  function captureVms(event) {
    setVms(event.target.value)
    console.log(vms)
  }

  function captureHours(event) {
    setHours(event.target.value)
    console.log(hours)
  }

  const radios = {
    display: 'grid', 
    width: '20em', 
    'grid-template-columns': '1fr', 
  }

  return (
    <>
    <h1>Hello from the other side!</h1>
    <h2>This is the {props.moduleName} module.</h2>
    <input type="number" placeholder="VMs" name="vms" onChange={captureVms}/>
    <input type="number" placeholder="Hours" name="hours" onChange={captureHours} />
    <span>=</span>
    <span name="total">{sum}</span>
    <br/>
    <Button onClick={calcSum} title="Save" ></Button>
    </>
  )
};
export default App;
