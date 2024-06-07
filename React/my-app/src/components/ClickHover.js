import React from 'react'
import { useState } from 'react'
const ClickHover = () => {
    const [counter ,setCounter] = useState(0);
  return (
    <div>
        <button onMouseOver={()=>setCounter(counter+1)}>Click me</button>
        <h1>Count is {counter}</h1>
    </div>
  )
}

export default ClickHover