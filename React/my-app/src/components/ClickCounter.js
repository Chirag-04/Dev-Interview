import React from 'react'
import { useState } from 'react'
const ClickCounter = () => {
    const [counter ,setCounter] = useState(0);
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>Click me</button>
        <h1>Count is {counter}</h1>
    </div>
  )
}

export default ClickCounter