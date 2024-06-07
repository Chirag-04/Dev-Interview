import React, { useEffect, useState } from 'react'

const DocTitle2 = () => {
    const [counter , setCounter] = useState(0);
    useEffect(()=>{
        document.title = `Count ${counter}`
    }  , [counter])

    
  return (
    <div>
        <button onClick={()=>setCounter(counter+1)}>New button : {counter}</button>
    </div>
  )
}

export default DocTitle2;