import React, { useState, useEffect } from "react";
import './Button'
import Button from "./Button";

export const App = (props) => {
  const [vms, setVms] = useState(0);
  const [hours, setHours] = useState(0)
  const [sum, setSum] = useState(0)
  console.log('remote props ', props.getTotal)

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
    <form>
      <div style={radios}>
        <fieldset id="group1">
          <h2>Traditional Contact Methods</h2>
          <input type="radio" id="contactChoice3"
          name="contact" value="mail"/>
          <label htmlFor="contactChoice3">Mail</label>
          <input type="radio" id="contactChoice2"
          name="contact" value="phone"/>
          <label htmlFor="contactChoice2">Phone</label>

        </fieldset>
      
        <fieldset id="group2">
          <h2>Modern Contact Methods</h2>
          <input type="radio" id="contactChoice1"
          name="contact" value="email"/>
          <label htmlFor="contactChoice1">Email</label>
          <input type="radio" id="contactChoice4" name="contact" value="slack" />
          <label htmlFor="contactChoice4">Slack</label>
        </fieldset>
        
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )
};
export default App;
